import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/data-process/selectors';
import Header from '../../components/header/header';
import AddToFavoritesButton from '../../components/add-to-favorites/add-to-favorites';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';

function MainPage(): JSX.Element {
  const {id, isFavorite, previewImage, name, posterImage, genre, released} = useAppSelector(getPromoFilm);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={previewImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <AddToFavoritesButton
                  isFavorite={isFavorite}
                  id={id}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
