// state/property.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PropertyActions from './property.actions';
import { PropertyService } from '../services/property.service';

@Injectable()
export class PropertyEffects {
  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PropertyActions.loadProperties),
      mergeMap(() =>
        this.propertyService.getProperties().pipe(
          map(properties => PropertyActions.loadPropertiesSuccess({ properties })),
          catchError(error => of(PropertyActions.loadPropertiesFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}
}