import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
  <div class="container">
    <div class="mt-3">

      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'mp_managemnet_client';
}
