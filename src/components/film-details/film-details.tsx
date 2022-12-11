import React,{useEffect,useState} from 'react';
import { useAppSelector } from '../../hooks/index';
import {  useParams } from 'react-router-dom';
function FilmDetails(): JSX.Element {
  const activeFilm = useAppSelector(getFilm);
  const {id: idActiveFilm} = useParams();
  const films = useAppSelector(getFilms);
  const [getFildId,setGetFilmId]=useState({})

 
 useEffect(()=>{
films.map((item)=>{
    if(item.id==idActiveFilm){
      setGetFilmId(item)
 }
  })
},[films])

console.log("getFildId",getFildId)
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Type</strong>
          <span className="film-card__details-value">{activeFilm.Type}</span>
        </p>
       
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{activeFilm.Year}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Type</strong>
          <span className="film-card__details-value">{activeFilm.Type}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Title</strong>
          <span className="film-card__details-value">{activeFilm.Title}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
