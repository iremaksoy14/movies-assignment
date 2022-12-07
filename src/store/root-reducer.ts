import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants/constants';
import { userProcess } from './user-process/user-process';
import { dataProcess } from './data-process/data-process';
import { uiProcess } from './ui-process/ui-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Ui]: uiProcess.reducer,
});
