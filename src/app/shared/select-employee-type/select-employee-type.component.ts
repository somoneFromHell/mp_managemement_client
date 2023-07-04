import { Component, EventEmitter, Output } from '@angular/core';
import { workerTypeModel, workersTypeModel } from 'src/app/interface/workers';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-select-employee-type',
  template: `
 `,
  styles: [
  ]
})
export class SelectEmployeeTypeComponent {
@Output() getSelectedEmployeeType = new EventEmitter() 
  
  workersTypedata:workersTypeModel[] = []
  selectedEmployeeType:string = ''
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
      this.workersTypedata =res.data
    })
  }
}
