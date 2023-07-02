import { Component, ElementRef } from '@angular/core';
import { faManatSign,faCircleXmark,faStar,faStarOfLife,faStarHalfStroke ,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { attandanceTypeModel, employeeModel } from 'src/app/interface/attandance';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-attendance-entry',
  templateUrl:'attendance-entry.component.html',
  styleUrls: ['attendance-entry.component.scss']
})
export class AttendanceEntryComponent {

 

  employeeData:{id:number,nickName:string}[] = [] 
  attendanceTypeList:attandanceTypeModel[]=[]
  faCoffee=faManatSign

  constructor( private service:AttendanceService){}
  
  ngOnInit(){
    this.bindData()
  }

  bindData(){
    this.service.getWorkerDataFotAtt().then(res=>{
      if(res.error)console.error(res.error)
      if(res.data)this.employeeData = res.data
      console.log(res.data)
    })

}


onSelected(selected:string  ) {

 
}

addSelectedValueToFormData(selectedItem: string,changedId:number|undefined) {
    console.log(selectedItem)
  }



}
