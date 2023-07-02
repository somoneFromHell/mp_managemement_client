import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkersComponent } from './workers.component';
import { WorkersDetailsComponent } from '../workers-details/workers-details.component';



@NgModule({
  declarations: [
    WorkerTableComponent,
    WorkerFormComponent,
    WorkersComponent,
    WorkersDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule

  ],exports:[
    WorkerTableComponent,
    WorkerFormComponent,
    WorkersDetailsComponent
  ]
})
export class WorkersModule { }
