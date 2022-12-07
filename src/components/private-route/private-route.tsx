import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import useSession from '../../hooks/use-session';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSession();

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
