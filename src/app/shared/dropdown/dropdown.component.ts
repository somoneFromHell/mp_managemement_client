import { Component, Input, Output } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

export interface DropdownModel{
  name:string,
  icon:string,
  color:string
}

@Component({
  selector: 'app-dropdown',
  templateUrl:'dropdown.component.html',
  styleUrls:['dropdown.component.scss']
})
export class DropdownComponent {

  @Input() dropdownOptions:DropdownModel[] = [];
  @Output() reciveSelectedItem:number = 0
  showOptions = false;
  
  selectedOption:DropdownModel = {name:'-select-',icon:'fa-caret-down',color:''}
  


  constructor( private atService:AttendanceService){}

    ngOnInit() {
      console.log(this.dropdownOptions)
      this.bindData()
    }
  
    toggleOptions(){
      
      this.showOptions = !this.showOptions 
      console.log(this.showOptions)
    }
  
    onOptionSelected(selectedItem: any) {
        this.selectedOption = selectedItem
        this.toggleOptions()
    }
  
    bindData(){
      this.atService.getAttendanceTypeList().then((res:any)=>{
        this.dropdownOptions = res
      })
    }
  
}
