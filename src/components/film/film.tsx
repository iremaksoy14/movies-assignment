import React, { MouseEventHandler } from 'react';
import styles from './Film.module.css';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/video-player/video-player';
import { FilmType } from '../../types/film-type';

type FilmProps = {
  film: FilmType,
  onMouseOver: MouseEventHandler<HTMLElement>,
  onMouseLeave: MouseEventHandler<HTMLElement>,
  activeFilm?: number,
  isPlaying: boolean;
}

function Film({film, onMouseOver, onMouseLeave, activeFilm, isPlaying}: FilmProps): JSX.Element {
  const {id, name, previewImage} = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>

      {activeFilm === id && isPlaying && <VideoPlayer film={film} activeFilm={activeFilm}/>}

      <Link className={`small-film-card__image ${styles.card}`} to={`/films/${id}/overview`}>
        <img src={previewImage} alt={name} width="280" height="175" />
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}/overview`}>{name}</Link>
      </h3>
    </article>
  );
}

export default Film;
