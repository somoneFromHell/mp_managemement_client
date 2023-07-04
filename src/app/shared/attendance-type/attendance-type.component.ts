import { Component} from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';


export interface AttendanceTypeDropdown{
  name:string,
  icon:string,
  color:string
}

@Component({
  selector: 'app-attendance-type',
  templateUrl:'attendance-type.component.html',
  styleUrls: ['./attendance-type.component.scss']
})
export class AttendanceTypeComponent {

  constructor( private atService:AttendanceService){}
  

showOptions = false;
dropdownOptions:AttendanceTypeDropdown[] = [];
selectedOption:AttendanceTypeDropdown = {name:'-select-',icon:'fa-caret-down',color:''}

  ngOnInit() {
    console.log(this.dropdownOptions)
    this.bindData()
  }

  toggleOptions(){
    
    this.showOptions = !this.showOptions 
    console.log(this.showOptions)
  }

  onOptionSelected(selectedItem: AttendanceTypeDropdown) {
      this.selectedOption = selectedItem
      this.toggleOptions()
  }

  bindData(){
    this.atService.getAttendanceTypeList().then((res:any)=>{
      this.dropdownOptions = res
    })
  }

}
