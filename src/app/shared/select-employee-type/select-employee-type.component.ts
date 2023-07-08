import { Component, EventEmitter, Output } from '@angular/core';
import { WorkersService } from 'src/app/services/workers.service';
import { DropdownModel } from '../dropdown/dropdown.component';

export interface workersTypeModel{
  id ?: number,
  workerTypeTitle:string,
  icon:string,
  color:string
}

@Component({
  selector: 'app-select-employee-type',
  template: '<app-dropdown [dropdownOptions]="SlelecttEmployeedropdownOptions" (reciveSelectedItem)="onEmployeeSelected($event)" ></app-dropdown>',
  styles: [
  ]
})
export class SelectEmployeeTypeComponent {

@Output() getSelectedEmployeeType = new EventEmitter() 
  
  selectedEmployeeType:string = ''
  loading = false
  disabled =false
  SlelecttEmployeedropdownOptions:DropdownModel[] = []

  constructor(private service:WorkersService){}
  ngOnInit(){
    this.getWorkersTypeData()
  }

  getWorkersTypeData(){
    this.service.getWorkerTypeList().then((res:any)=>{
      this.SlelecttEmployeedropdownOptions = res.map((item:any)=>{return{
        id:item.id,
        name:item.workerTypeTitle,
        color:item.color,
        icon:item.icon
      }})
    })
  }


  onEmployeeSelected($event: DropdownModel) {
    console.log($event)
  }
}
