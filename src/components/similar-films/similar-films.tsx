import React from 'react';
import { useAppSelector } from '../../hooks';
import { getSimilarFilms } from '../../store/data-process/selectors';
import { Settings } from '../../constants/constants';
import Films from '../../components/films/films';

function SimilarFilms(): JSX.Element {
  const similarFilms = useAppSelector(getSimilarFilms);
  const showedSimilarFilms = similarFilms.slice(0, Settings.NUMBER_OF_SIMILAR_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length === 0
        ? <div>There are no similar films...</div>
        : <Films films={showedSimilarFilms}/>}
    </section>
  );
}

export default SimilarFilms;
