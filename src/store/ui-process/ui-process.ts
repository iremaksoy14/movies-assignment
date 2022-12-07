import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Settings } from '../../constants/constants';
import { setError } from './../action';

const initialState: {
  numberShownFilms: number,
  error: null | {
    message: string,
    code: number,
  }
} = {
  numberShownFilms: Settings.NUMBER_SHOWN_FILMS,
  error: null,
};

export const uiProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    addMoreFilms: (state) => {
      state.numberShownFilms += Settings.NUMBER_SHOWN_FILMS;
    },
    resetNumberShownFilms: (state) => {
      state.numberShownFilms = Settings.NUMBER_SHOWN_FILMS;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setError, (state, action) => {
        action.payload === null
          ? state.error = action.payload
          : state.error = {
            message: action.payload?.message,
            code: action.payload?.code,
          };
      });
  }
});

export const {addMoreFilms, resetNumberShownFilms} = uiProcess.actions;
