import { createAction, props } from "@ngrx/store";

export type ColorPalettes = 'default' | 'blue' | 'orange' | 'red' | 'violet' | 'green' | 'cyan' | 'yellow';

export const setColorPalette = createAction(
  '[Palette] Set Color Palette',
  props<{ palette: ColorPalettes }>()
);
