import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { workersModel } from 'src/app/interface/workers';

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
        <label for="select">select Type</label>

          <app-select-employee-type (getSelectedEmployeeType)="setTheValueOfType($event)" id="select"></app-select-employee-type>
        </div>

        <div>
          <label for="sal">salary</label>
          <input class="form-input" formControlName="salary" type="number" id="sal">
        </div>

      <div>
        <div>
          <label for="avl">available</label>
          <input class="form-input" formControlName="available" type="checkbox" [defaultValue]="false" id="avl">
        </div>
        <button class="btn btn-blue" (click)="sendFormData.emit(addWorkersForm.value)">save</button>

        <button class="btn btn-red" (click)="operationAbort.emit(true)">cancel</button>
      </div>

    </form>
  `,
  styles: [
  ]
})
export class WorkerFormComponent {

  
  @Output() operationAbort =  new EventEmitter<boolean>();
  @Output() sendFormData = new EventEmitter<any>();
  

  addWorkersForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    workerTypeId: new FormControl(1),
    available: new FormControl(false)
  })

  saveData() {
    console.log(this.addWorkersForm.value)
  }

  setTheValueOfType(selectedItemValue:unknown){
    this.addWorkersForm.controls['workerTypeId'].setValue(Number(selectedItemValue))
    console.log(selectedItemValue)
  }

}
