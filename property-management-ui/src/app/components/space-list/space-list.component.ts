// components/space-list/space-list.component.ts
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Space } from '../../models/space.model';
import { toggleSpace } from '../../state/property.actions';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.scss']
})
export class SpaceListComponent {
  @Input() spaces: Space[] = [];
  @Input() propertyId = '';

  constructor(private store: Store) {}

  onToggleSpace(spaceId: string): void {
    this.store.dispatch(toggleSpace({ propertyId: this.propertyId, spaceId }));
  }
}