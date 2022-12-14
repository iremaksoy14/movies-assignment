import React, { useEffect ,useState} from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilmAction, fetchSimilarFilmsAction, fetchReviewsAction } from '../../store/api-actions';
import cn from 'classnames';
import useScrollToTop from '../../hooks/use-scroll-to-top';
import useSession from '../../hooks/use-session';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import SimilarFilms from '../../components/similar-films/similar-films';
import Footer from '../../components/footer/footer';
import Loading from '../../components/loading/loading';
import AddToFavoritesButton from '../../components/add-to-favorites/add-to-favorites';
import { AuthorizationStatus} from '../../constants/constants';
import { Tabs } from '../../constants/constants';
import { getFilm, getLoadedFilmStatus,getFilms } from '../../store/data-process/selectors';

function FilmPage(): JSX.Element {
  useScrollToTop();
  const authorizationStatus = useSession();
  const {id, name, previewImage, posterImage, genre, released, isFavorite} = useAppSelector(getFilm);
  const films = useAppSelector(getFilms);

const [getFildId,setGetFilmId]=useState({})

  const isFilmLoaded = useAppSelector(getLoadedFilmStatus);

  const {id: idActiveFilm} = useParams();
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();


 


  useEffect(() => {
    dispatch(fetchFilmAction(Number(idActiveFilm)));
    dispatch(fetchSimilarFilmsAction(Number(idActiveFilm)));
    dispatch(fetchReviewsAction(Number(idActiveFilm)));
    

  }, [dispatch, idActiveFilm]);



  useEffect(()=>{

   
        console.log(films)
        films.map((item)=>{
          if(item.id==idActiveFilm){
            setGetFilmId(item)
            
      
          }
        })
      },[films])
      console.log(getFildId)

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor:"#990000"}}>
        <div className="film-card__hero"  style={{backgroundColor:"#ff0000"}}>
          <div className="film-card__bg">
          </div>
          <h1 className="visually-hidden"></h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{getFildId.Title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${getFildId.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <AddToFavoritesButton
                  isFavorite={isFavorite}
                  id={id}
                />

     <Link className="btn film-card__button" to={`/films/${getFildId.id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={getFildId.Poster} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {Tabs.map((tab) => (
                    <li key={tab} className={cn('film-nav__item', {'film-nav__item--active': pathname.includes(tab.toLocaleLowerCase())})}>
                      <Link className="film-nav__link" to={tab.toLocaleLowerCase()}>{tab}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {!isFilmLoaded
                ? (<Loading />)
                : (<Outlet />)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content" style={{backgroundImage:"none",backgroundColor:"#990000"}}>
        <SimilarFilms />
        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
