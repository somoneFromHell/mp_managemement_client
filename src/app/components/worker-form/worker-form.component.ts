import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-worker-form',
  template: `
   <form action="" class="worker-form" [formGroup]="addWorkersForm">
        <div>
          <label for="fname">first name</label>
          <input class="form-input" formControlName="firstName" type="text" id="fname">
        </div>
        <div>
          <label for="lname">last name</label>
          <input class="form-input" formControlName="lastName" type="text" id="lname">
        </div>

        <div>
          <label for="nname">nick name</label>
          <input class="form-input" formControlName="nickName" type="text" id="nname">
        </div>

        <div>
          <app-select-employee-type></app-select-employee-type>
        </div>

        <div>
          <label for="sal">salary</label>
          <input class="form-input" formControlName="salary" type="number" id="sal">
        </div>

      <div>
        <div>
          
          <label for="avl">available</label>
          <input class="form-input" formControlName="available" type="checkbox" id="avl">
        </div>
        <button class="btn btn-blue" >save</button>

        <button class="btn btn-red" (click)="operationAbort.emit(true)">cancel</button>
      </div>

    </form>
  `,
  styles: [
  ]
})
export class WorkerFormComponent {

  
  @Output() operationAbort =  new EventEmitter<boolean>();
  

  addWorkersForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    type: new FormControl(''),
    available: new FormControl()
  })




  saveData() {
    console.log(this.addWorkersForm.value)
  }

}
