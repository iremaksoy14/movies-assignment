import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../../hooks/use-session';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../constants/constants';
import { addFilmToFavorites } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/data-process/selectors';

type AddToFavoritesButtonProps = {
  isFavorite: boolean,
  id: number,
}

function AddToFavoritesButton({isFavorite, id}: AddToFavoritesButtonProps): JSX.Element {
  const authorizationStatus = useSession();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const numberFavoriteFilms = favoriteFilms.length;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleClick() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(addFilmToFavorites({idActiveFilm: Number(id), status: Number(!isFavorite)}));
  }

  return (
    <button
      className="btn btn--list film-card__button"
      onClick={handleClick}
    >
      {isFavorite && authorizationStatus === AuthorizationStatus.Auth
        ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
      <span>My list</span>
      {authorizationStatus === AuthorizationStatus.Auth && <span className="film-card__count">{numberFavoriteFilms}</span>}
    </button>
  );
}

export default AddToFavoritesButton;
