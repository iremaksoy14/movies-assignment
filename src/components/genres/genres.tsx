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
<div></div>
  );
}

export default Genres;
