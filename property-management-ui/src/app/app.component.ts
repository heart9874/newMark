// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <h1>Property Management</h1>
      <app-property-list></app-property-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}