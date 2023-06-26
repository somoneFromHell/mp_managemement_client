import { Component, Input } from '@angular/core';
import { dropdownModel } from 'src/app/interface/common';


@Component({
  selector: 'app-dropdown',
  template: `
   <select name="choice">
  <option value="{{item.value}}" *ngFor="let item of data">{{item.label}}</option>
</select>
  `,
  styleUrls: ['dropdown.component.scss']
})
export class DropdownComponent {
  @Input() data:dropdownModel[] = []
  @Input() title = ''
  @Input() default = ''
   
    ngOnItit(){

    }


}
