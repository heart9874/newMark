// state/property.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PropertyState } from './property.state';

export const selectPropertyState = createFeatureSelector<PropertyState>('property');

export const selectProperties = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.properties
);

export const selectLoading = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.loading
);

export const selectError = createSelector(
  selectPropertyState,
  (state: PropertyState) => state.error
);