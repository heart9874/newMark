// state/property.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialPropertyState, PropertyState } from './property.state';
import * as PropertyActions from './property.actions';

export const propertyReducer = createReducer(
  initialPropertyState,
  on(PropertyActions.loadProperties, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(PropertyActions.loadPropertiesSuccess, (state, { properties }) => ({
    ...state,
    properties,
    loading: false
  })),
  on(PropertyActions.loadPropertiesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(PropertyActions.toggleProperty, (state, { propertyId }) => ({
    ...state,
    properties: state.properties.map(property => 
      property.id === propertyId 
        ? { ...property, expanded: !property.expanded } 
        : property
    )
  })),
  on(PropertyActions.toggleSpace, (state, { propertyId, spaceId }) => ({
    ...state,
    properties: state.properties.map(property => 
      property.id === propertyId
        ? {
            ...property,
            spaces: property.spaces.map(space =>
              space.id === spaceId
                ? { ...space, expanded: !space.expanded }
                : space
            )
          }
        : property
    )
  }))
);