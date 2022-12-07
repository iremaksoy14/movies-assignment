import React from 'react';
import style from './My-list-page.module.css';
import Header from '../../components/header/header';
import Films from '../../components/films/films';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/data-process/selectors';

function MyListPage(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const countOfFilms = favoriteFilms.length;

  return (
    <div className="user-page">
      <Header >
        <h1 className={`page-title user-page__title ${style.title}`}>My list <span className="user-page__film-count">{countOfFilms}</span></h1>
      </Header>

      {countOfFilms === 0
        ? <p className={style.empty}>My list is empty</p>
        : (
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <Films films={favoriteFilms}/>
          </section>
        )}
    </div>
  );
}

export default MyListPage;
