import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceEntryComponent } from './components/attendance-entry/attendance-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';
import { SelectEmployeeTypeComponent } from './shared/select-employee-type/select-employee-type.component';
import { AttendanceTypeComponent } from './shared/attendance-type/attendance-type.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
      
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AttendanceComponent,
    WorkersComponent,
    AttendanceEntryComponent,
    DashboardComponent,
    LoginComponent,
    WorkerFormComponent,
    SelectEmployeeTypeComponent,
    AttendanceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
