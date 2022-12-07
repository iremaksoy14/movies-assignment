import { createAction } from '@reduxjs/toolkit';

export const setError = createAction('app/setError', (value: null | {message: string , code: number}) => ({
  payload: value
}));

export const redirectToRoute = createAction('app/redirectToRoute', (value: string) => ({
  payload: value
}));
