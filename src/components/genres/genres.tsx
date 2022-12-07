import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenres } from '../../store/data-process/selectors';
import { changeGenre } from '../../store/data-process/data-process';

type GenresProps = {
  activeGenre: string,
}

function Genres({activeGenre}: GenresProps): JSX.Element {
  const genres = useAppSelector(getGenres);

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => (
        <li className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === genre})} key={genre}>
          <Link
            className="catalog__genres-link"
            to={`?genre=${genre}`}
            onClick={() => {
              dispatch(changeGenre(activeGenre));
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Genres;
