import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { FilmType } from '../types/film-type';
import { ReviewType } from '../types/review-type.js';
import { AuthData } from '../types/auth-data';
import { UserType } from '../types/user-type';
import { ReviewData } from '../types/review-data';
import { FavoritesData } from '../types/favorites-data';
import { setError, redirectToRoute } from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../constants/constants';
import { store } from './';
import { saveUserData, dropUserData} from '../services/user-data';

// ---------- USER ----------
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, avatarUrl, email: userEmail, id, name}} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveUserData(token, avatarUrl, userEmail, id, name);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropUserData();
  },
);

// ---------- UI ----------
export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

// ---------- DATA ----------


export const fetchFilmsAction = createAsyncThunk<[] | FilmType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<[] | FilmType[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<FilmType | Record<string, never>, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`/films/${filmId}`);
      return data;
    } catch {
      dispatch(redirectToRoute('/not-found'));
    }
    return {};
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmType[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`/films/${filmId}/similar`);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<FilmType, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(APIRoute.PromoFilm);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<FilmType[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.FavoriteFilms);
    return data;
  },
);

export const addFilmToFavorites = createAsyncThunk<FilmType, FavoritesData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/addFilmToFavorites',
  async ({idActiveFilm, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<FilmType>(`/favorite/${idActiveFilm}/${status}`, {idActiveFilm, status});
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewType[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`/comments/${filmId}`);
    return data;
  },
);

export const sendReview = createAsyncThunk<ReviewType[], ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/sendReview',
  async ({idActiveFilm, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewType[]>(`/comments/${idActiveFilm}`, {rating, comment});
    dispatch(redirectToRoute(`/films/${idActiveFilm}/reviews`));
    return data;
  },
);
