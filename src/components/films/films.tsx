import React, { PropsWithChildren, useState ,useEffect} from 'react';
import Film from '../film/film';
import { FilmType } from '../../types/film-type';
import { Settings } from '../../constants/constants';
import { Link } from 'react-router-dom';
import { addFilmToFavorites } from '../../store/api-actions';
import { getFilms, getGenres, getFilteredFilms } from '../../store/data-process/selectors';

import styles from '../film/Film.module.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { runInNewContext } from 'vm';
type FilmsProps = PropsWithChildren<{
  films: FilmType[],
}>

let timeoutId: ReturnType<typeof setTimeout>;

function Films({films, children}: FilmsProps): JSX.Element {
  const selector=useAppSelector(getFilms)
  console.log(selector)
  const [activeFilm, setActiveFilm] = useState<undefined | number>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  interface Provider extends FilmType {
    id:number,
    name:string,
    description:string,
    backgroundImage:string
}
  const [tempAray, setTempArray] = useState<Provider[]>(selector)

  const dispatch = useAppDispatch();

useEffect(()=>{
 
  setTempArray(selector)
},[selector])
console.log(tempAray)





  let newMovies: Array<Provider> = [];

  const handleCardHover = (idFilm: undefined | number) => {
    setActiveFilm(idFilm);
    timeoutId = setTimeout(() => setIsPlaying(true), Settings.DELAY_OF_PLAYING);
  };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log(e.target.value)
      setSearchInput(e.target.value);
      var result= films.map((film: FilmType) => {

        if(film.Title.toLowerCase().includes(e.target.value)){
         return film
        }



   })
   console.log(result)
   result.map((item)=>{
     if(item!==undefined){



    newMovies.push(item)
      //  setnewMovies(oldArray =>oldArray.concat(item) );
     console.log(newMovies)


     }
     console.log(newMovies)
     
    //  if(newMovies.length>2){
    //   newMovies=newMovies.splice(2)
    //  }
     console.log(newMovies)
      setTempArray(newMovies)
     console.log(tempAray)
     
   })


    };

  const handleCardLeave = () => {
    setActiveFilm(undefined);
    setIsPlaying(false);
    clearTimeout(timeoutId);
  };

  return (
    <>
      <div className="search" style={{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",marginBottom:10}}>
        <input type="text"
         value={searchInput}
         onChange={handleChange}


        />


      </div>
      <div className="catalog__films-list">
    
    {tempAray.map((film: Provider) => (
          <article className="small-film-card catalog__films-card" 
          onMouseOver={() => handleCardHover(film.Title)}
          onMouseLeave={handleCardLeave}>

      
    
          <Link to={`/films/${film.id}/overview`} className={`small-film-card__image ${styles.card}`} >
            <img src={film.Poster} alt={name} width="280" height="175" />
          </Link>
          <h3 className="small-film-card__title">
            <Link to={`/films/${film.id}/overview`}  className="small-film-card__link" >{film.Title}</Link>
          </h3>
        </article>
        ))}

            </div>
      {children}
    </>
  );
}

export default Films;
