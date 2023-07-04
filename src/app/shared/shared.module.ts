import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceTypeComponent } from './attendance-type/attendance-type.component';
import { SelectEmployeeTypeComponent } from './select-employee-type/select-employee-type.component';
import { WorkersModule } from '../pages/workers/workers.module';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    AttendanceTypeComponent,
    SelectEmployeeTypeComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AttendanceTypeComponent,
    SelectEmployeeTypeComponent,
    DropdownComponent

  ]
})
export class SharedModule { }
