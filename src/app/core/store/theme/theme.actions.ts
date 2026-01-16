import { createAction, props } from '@ngrx/store';

export type ThemeModes = 'light' | 'dark';

export const setTheme = createAction(
  '[Theme] Set Theme',
  props<{ theme: ThemeModes }>()
);
