import React from 'react';
import { Link } from 'react-router-dom';
import styles from './User-nav.module.css';
import useSession from '../../hooks/use-session';
import { useAppDispatch } from '../../hooks/index';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../constants/constants';
import { AuthorizationStatus } from '../../constants/constants';
import { getUserAvatar } from '../../services/user-data';

function UserNav(): JSX.Element {
  const authorizationStatus = useSession();
  const avatarUrl = getUserAvatar();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutAction());
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? (
        <ul className="user-block">
          <li className="user-block__item">
            <Link className={`user-block__avatar ${styles.avatar}`} to={AppRoute.MyList}>
              <img src={avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </li>
          <li className="user-block__item">
            <Link
              className="user-block__link"
              to={AppRoute.Login}
              onClick={handleLogOut}
            >
              Sign out
            </Link>
          </li>
        </ul>
      )
      : (
        <div className="user-block">
          <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
        </div>
      )
  );
}

export default UserNav;
