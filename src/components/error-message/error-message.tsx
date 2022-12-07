import { useAppSelector } from '../../hooks';
import style from './Error-message.module.css';
import { ServerResponseStatusCode } from '../../constants/constants';
import { getError } from '../../store/ui-process/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error && error?.code !== ServerResponseStatusCode.Unauthorized)
    ? <div className={style.errorMessage}>{error?.message}</div>
    : null;
}

export default ErrorMessage;
