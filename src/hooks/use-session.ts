import { useAppSelector } from '../hooks/index';
import { getAuthorizationStatus } from '../store/user-process/selectors';

function useSession() {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return authStatus;
}

export default useSession;
