import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';

export interface DropdownModel{
  id ?:number
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

  showOptions = false;
  private dropdownElement?: HTMLElement;

  @Input() dropdownOptions:DropdownModel[] = [];
  @Output() reciveSelectedItem:EventEmitter<DropdownModel> = new EventEmitter<DropdownModel>();
  @HostListener('document:click', ['$event'])
  handleClick(event:MouseEvent) {
    const clickedOnDrpdown = this.dropdownElement?.contains(event.target as Node)
    if (!clickedOnDrpdown) {
      this.showOptions = false;
    }
  }
  
  selectedOption:DropdownModel = {name:'-select-',icon:'fa-caret-down',color:''}
  
    ngOnInit() {
    }
  
    toggleOptions(){
      this.showOptions = !this.showOptions 
    }
  
    onOptionSelected(selectedItem: DropdownModel) {
      this.selectedOption = selectedItem
        this.reciveSelectedItem.emit(selectedItem)
        this.toggleOptions()
    }

    assignDropdownElement(element: HTMLElement) {
      this.dropdownElement = element;
    }
  

  
}
