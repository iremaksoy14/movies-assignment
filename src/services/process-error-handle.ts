import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (error: string, status: number): void => {
  store.dispatch(setError({message: error, code: status}));
  store.dispatch(clearErrorAction());
};
