import { NameSpace } from '../../constants/constants';
import { State } from '../../types/state';

export const getNumberShownFilms = (state: State): number => state[NameSpace.Ui].numberShownFilms;
export const getError = (state: State): null | { message: string, code: number } => state[NameSpace.Ui].error;
