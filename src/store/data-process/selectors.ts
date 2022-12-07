import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';
import { FilmType } from '../../types/film-type';
import { ReviewType } from '../../types/review-type';
import { createSelector } from '@reduxjs/toolkit';

export const getFilms = (state: State): FilmType[] => state[NameSpace.Data].films;
export const getFilm = (state: State): FilmType | Record<string, never> => state[NameSpace.Data].film;
export const getLoadedFilmStatus = (state: State): boolean => state[NameSpace.Data].isFilmLoaded;
export const getSimilarFilms = (state: State): FilmType[] => state[NameSpace.Data].similarFilms;
export const getPromoFilm = (state: State): FilmType | Record<string, never> => state[NameSpace.Data].promoFilm;
export const getFavoriteFilms = (state: State): FilmType[] => state[NameSpace.Data].favoriteFilms;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Data].reviews;
export const getPostingReviewStatus = (state: State): boolean => state[NameSpace.Data].isReviewPosting;
export const getErrorPostedReviewStatus = (state: State): boolean => state[NameSpace.Data].isErrorReviewPosted;
export const getGenres = (state: State): string[] => state[NameSpace.Data].genres;
export const getActiveGenre = (state: State): string => state[NameSpace.Data].activeGenre;

export const getFilteredFilms = createSelector(
  [getFilms, getActiveGenre],
  (films, activeGanre) => {
    if (activeGanre === 'All genres') {
      return films;
    }

    return films.filter((film) => film.genre === activeGanre);
  }
);
