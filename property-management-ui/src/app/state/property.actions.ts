// state/property.actions.ts
import { createAction, props } from '@ngrx/store';
import { Property } from '../models/property.model';

export const loadProperties = createAction('[Property] Load Properties');

export const loadPropertiesSuccess = createAction(
  '[Property] Load Properties Success',
  props<{ properties: Property[] }>()
);

export const loadPropertiesFailure = createAction(
  '[Property] Load Properties Failure',
  props<{ error: string }>()
);

export const toggleProperty = createAction(
  '[Property] Toggle Property',
  props<{ propertyId: string }>()
);

export const toggleSpace = createAction(
  '[Property] Toggle Space',
  props<{ propertyId: string; spaceId: string }>()
);