import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetNumberShownFilms } from '../../store/ui-process/ui-process';
import { changeGenre } from '../../store/data-process/data-process';
import { getFilms, getGenres, getFilteredFilms } from '../../store/data-process/selectors';
import { getNumberShownFilms } from '../../store/ui-process/selectors';
import Films from '../../components/films/films';
import Genres from '../../components/genres/genres';
import AddMore from '../../components/add-more/add-more';
import Loading from '../../components/loading/loading';

function Catalog(): JSX.Element {
  const films = useAppSelector(getFilms);
  const genres = useAppSelector(getGenres);
  const [searchParams, ] = useSearchParams();
  const activeGenre = searchParams.get('genre') || 'All genres';
  const numberShownFilms = useAppSelector(getNumberShownFilms);
  const filtredFilms = useAppSelector(getFilteredFilms);
  const showedFilms = filtredFilms.slice(0, numberShownFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(activeGenre));
    dispatch(resetNumberShownFilms());

  }, [dispatch, activeGenre, films]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {films.length < 0 && genres.length < 0
        ? (<Loading />)
        : (
          <>
            <Genres activeGenre={activeGenre}/>

            <Films films={showedFilms}>
              {((filtredFilms.length - showedFilms.length) > 0) && <AddMore />}
            </Films>
          </>
        )}
    </section>
  );
}

export default Catalog;
