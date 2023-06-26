import { Component, Output } from '@angular/core';
import {  dropdownModel } from 'src/app/interface/common';
import { workerTypeModel, workersTypeModel } from 'src/app/interface/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-select-employee-type',
  template: `
   <select name="choice">
    <option value="">-- select --</option>
  <option value="{{item.id}}" *ngFor="let item of workersTypedata">{{item.name}}</option>
</select>  `,
  styles: [
  ]
})
export class SelectEmployeeTypeComponent {

  
  workersTypedata:workersTypeModel[] = []
  loading = false
  disabled =false

  constructor(private service:WorkersService){}
  ngOnInit(){
    this.getWorkersTypeData()
  }

  getWorkersTypeData(){
    this.service.getWorkerTypeList().then((res:any)=>{
      if(res.error){
        this.loading = true
        console.log(res.error)
      }
      console.log(res.data)
      this.workersTypedata =res.data
    })
  }



}
