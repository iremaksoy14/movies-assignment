import { FilmType } from '../types/film-type';

export const updateFilms = (films: FilmType[], updatedFilm: FilmType) => {
  const {id} = updatedFilm;
  const index = films.findIndex((item) => item.id === id);
  if (index !== -1) {
    films[index].isFavorite = updatedFilm.isFavorite;
  }
  return films;
};

export const updateActiveFilm = (activeFilm: FilmType | Record<string, never>, updatedFilm: FilmType) => {
  if (activeFilm && activeFilm.id === updatedFilm.id) {
    activeFilm.isFavorite = updatedFilm.isFavorite;
  }
  return activeFilm;
};

export const addFromFavoriteFilms = (favoriteFilms: FilmType[], filmToAdd: FilmType) => {
  const {id} = filmToAdd;
  const index = favoriteFilms.findIndex((item) => item.id === id);
  if (index === -1) {
    favoriteFilms.push(filmToAdd);
  }
  return favoriteFilms;
};

export const removeFromFavoriteFilms = (films: FilmType[], filmToRemove: FilmType) => {
  const {id} = filmToRemove;
  const index = films.findIndex((item) => item.id === id);
  if (index !== -1) {
    films.splice(index, 1);
  }
  return films;
};
