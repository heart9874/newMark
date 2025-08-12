// components/property-list/property-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Property } from '../../models/property.model';
import { loadProperties, toggleProperty } from '../../state/property.actions';
import { selectProperties, selectLoading, selectError } from '../../state/property.selectors';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties$: Observable<Property[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.properties$ = this.store.select(selectProperties);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProperties());
  }

  onToggleProperty(propertyId: string): void {
    this.store.dispatch(toggleProperty({ propertyId }));
  }
}