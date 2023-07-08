import { Component} from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { DropdownModel } from '../dropdown/dropdown.component';


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
onAttandenceTypeSelected($event: DropdownModel) {
console.log($event)
}

  constructor( private atService:AttendanceService){}
  

showOptions = false;
AttdropdownOptions:AttendanceTypeDropdown[] = [];
selectedOption:AttendanceTypeDropdown = {name:'-select-',icon:'fa-caret-down',color:''}

  ngOnInit() {
    this.bindData()
  }

  toggleOptions(){
    
    this.showOptions = !this.showOptions 
  }

  onOptionSelected(selectedItem: AttendanceTypeDropdown) {
      this.selectedOption = selectedItem
      this.toggleOptions()
  }

  bindData(){
    this.atService.getAttendanceTypeList().then((res:any)=>{
      this.AttdropdownOptions = res
    })
  }

}
