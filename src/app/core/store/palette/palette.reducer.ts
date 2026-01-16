import { createReducer, on } from '@ngrx/store';
import { setColorPalette } from './palette.actions';

export interface PaletteState {
  currentPalette: string;
}

export const initialPaletteState: PaletteState = {
  currentPalette: 'default'
};

export const paletteReducer = createReducer(
  initialPaletteState,
  on(setColorPalette, (state, { palette }) => ({ ...state, currentPalette: palette }))
);
