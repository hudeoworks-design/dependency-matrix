import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PaletteState } from './palette.reducer';

export const selectPaletteState = createFeatureSelector<PaletteState>('palette');

export const selectCurrentPalette = createSelector(
  selectPaletteState,
  (state) => state.currentPalette
);


