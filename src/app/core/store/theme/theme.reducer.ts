import { createReducer, on } from '@ngrx/store';
import { setTheme } from './theme.actions';

export interface ThemeState {
  currentTheme: string;
}

export const initialThemeState: ThemeState = {
  currentTheme: 'light'
};

export const themeReducer = createReducer(
  initialThemeState,
  on(setTheme, (state, { theme }) => ({ ...state, currentTheme: theme }))
);
