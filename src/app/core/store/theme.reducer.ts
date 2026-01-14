import { createReducer, on } from '@ngrx/store';
import { setTheme } from './theme.actions';

export interface ThemeState {
  currentTheme: string;
}

export const initialState: ThemeState = {
  currentTheme: 'light'
};

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => ({ ...state, currentTheme: theme }))
);
