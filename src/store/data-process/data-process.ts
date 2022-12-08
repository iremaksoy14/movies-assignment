import { createSlice } from '@reduxjs/toolkit';
import { Settings, NameSpace } from '../../constants/constants';
import { FilmType } from '../../types/film-type';
import { ReviewType } from '../../types/review-type';
import { updateFilms, updateActiveFilm, removeFromFavoriteFilms, addFromFavoriteFilms } from '../../utils/update-favorite-films';
import {
  fetchFilmsAction,
  fetchFilmAction,
  fetchSimilarFilmsAction,
  fetchPromoFilmAction,
  fetchFavoriteFilmsAction,
  addFilmToFavorites,

  fetchReviewsAction,
  sendReview,
} from '../api-actions';
import getGenresList from '../../utils/get-genres-list';

const initialState: {
  films: FilmType[] | [],
  film: FilmType | Record<string, never>,
  isFilmLoaded: boolean,
  similarFilms: FilmType[],
  promoFilm: FilmType | Record<string, never>,
  favoriteFilms: FilmType[],
  reviews: ReviewType[],
  isReviewPosting: boolean,
  isErrorReviewPosted: boolean,
  genres: string[],
  activeGenre: string,
} = {
  films: [],
  film: {},
  isFilmLoaded: false,
  similarFilms: [],
  promoFilm: {},
  favoriteFilms: [],
  reviews: [],
  isReviewPosting: false,
  isErrorReviewPosted: false,
  genres: [],
  activeGenre: Settings.DEFOULT_GENRE,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.genres = getGenresList(action.payload);
        state.films = action.payload;
      })
  
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoaded = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoaded = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(addFilmToFavorites.fulfilled, (state, action) => {
        state.similarFilms = updateFilms(state.similarFilms, action.payload);
        state.films = updateFilms(state.films, action.payload);
        state.film = updateActiveFilm(state.film, action.payload);
        state.promoFilm = updateActiveFilm(state.promoFilm, action.payload);
        action.payload.isFavorite
          ? state.favoriteFilms = addFromFavoriteFilms(state.favoriteFilms, action.payload)
          : state.favoriteFilms = removeFromFavoriteFilms(state.favoriteFilms, action.payload);
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(sendReview.pending, (state, action) => {
        state.isReviewPosting = true;
      })
      .addCase(sendReview.fulfilled, (state, action) => {
        state.isReviewPosting = false;
        state.reviews = action.payload;
        state.isErrorReviewPosted = false;
      })
      .addCase(sendReview.rejected, (state, action) => {
        state.isReviewPosting = false;
        state.isErrorReviewPosted = true;
      });
  }
});

export const {changeGenre} = dataProcess.actions;
