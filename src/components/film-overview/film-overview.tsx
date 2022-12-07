import React from 'react';
import { useAppSelector } from '../../hooks';
import { translateRating } from '../../utils/translate-rating';
import { getFilm } from '../../store/data-process/selectors';

function FilmOverview(): JSX.Element {
  const activeFilm = useAppSelector(getFilm);
  const {rating, scoresCount, description, director, starring} = activeFilm;
  const actors = `${starring.join(', ')} and other`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{translateRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actors}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
