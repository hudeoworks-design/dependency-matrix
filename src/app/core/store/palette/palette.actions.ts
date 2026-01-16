import { createAction, props } from "@ngrx/store";

export type colorPalettes = 'default' | 'blue' | 'orange' | 'red' | 'violet' | 'green' | 'cyan' | 'yellow';

export const setColorPalette = createAction(
  '[Palette] Set Color Palette',
  props<{ palette: colorPalettes }>()
);
