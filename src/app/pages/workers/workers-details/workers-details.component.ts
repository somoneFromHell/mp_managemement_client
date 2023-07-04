import { Component } from '@angular/core';
import { faHospital,faHandBackFist } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-workers-details',
  templateUrl:'./workers-detail.component.html',
  styleUrls: [ './workers-detail.component.scss' ]
})
export class WorkersDetailsComponent {

  hospotal = faHospital 

  dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string ='Option1';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
