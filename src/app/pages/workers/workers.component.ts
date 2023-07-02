import { Component } from '@angular/core';

@Component({
  selector: 'app-workers',
  template: `
    <p>
      workers works!
    </p>

    <app-worker-form></app-worker-form>
    <app-worker-table></app-worker-table>
    <app-workers-details></app-workers-details>
  `,
  styles: [
  ]
})
export class WorkersComponent {

}
