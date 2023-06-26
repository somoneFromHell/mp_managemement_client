import { Component, ElementRef } from '@angular/core';
import { faManatSign,faCircleXmark,faStar,faStarOfLife,faStarHalfStroke ,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { attandanceTypeModel, employeeModel } from 'src/app/interface/attandance';

@Component({
  selector: 'app-attendance-entry',
  templateUrl:'attendance-entry.component.html',
  styleUrls: ['attendance-entry.component.scss']
})
export class AttendanceEntryComponent {
 

  employeeData:employeeModel[] = [] 
  attendanceTypeList:attandanceTypeModel[]=[]
  faCoffee=faManatSign
  
  commonDecidedValue: any ;
  ngOnInit(){
    this.bindData()
    console.log(this.commonDecidedValue)
  }

  bindData(){
    this.employeeData=[
      {id:1,nickName:'satyam'},
      {id:2,nickName:'thakur'},
      {id:3,nickName:'lambu'},
      {id:4,nickName:'lalu'},
      {id:3,nickName:'lambu'},
      {id:5,nickName:'lala'},
      {id:6,nickName:'chaurasiya'},
    ]

    this.attendanceTypeList=[
      {id:1,name:'absent',icon:faCircleXmark},
      {id:2,name:'half',icon:faStar},
      {id:3,name:'full',icon:faStarHalfStroke},
      {id:4,name:'night',icon:faStarOfLife},
      {id:5,name:'double',icon:faStarHalfAlt}
    ]
}


onSelected(selected:string  ) {
console.log(selected,this.commonDecidedValue)

 
}



}
