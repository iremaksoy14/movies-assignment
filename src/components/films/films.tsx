import React, { PropsWithChildren, useState } from 'react';
import Film from '../film/film';
import { FilmType } from '../../types/film-type';
import { Settings } from '../../constants/constants';

type FilmsProps = PropsWithChildren<{
  films: FilmType[],
}>

let timeoutId: ReturnType<typeof setTimeout>;

function Films({films, children}: FilmsProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<undefined | number>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCardHover = (idFilm: undefined | number) => {
    setActiveFilm(idFilm);
    timeoutId = setTimeout(() => setIsPlaying(true), Settings.DELAY_OF_PLAYING);
  };

  const handleCardLeave = () => {
    setActiveFilm(undefined);
    setIsPlaying(false);
    clearTimeout(timeoutId);
  };

  return (
    <>
      <div className="catalog__films-list">
     
        {films.map((film: FilmType) => (
          <Film
            film={film}
            key={film.id}
            onMouseOver={() => handleCardHover(film.id)}
            onMouseLeave={handleCardLeave}
            activeFilm={activeFilm}
            isPlaying={isPlaying}
          />
        ))}
      </div>
      {children}
    </>
  );
}

export default Films;
