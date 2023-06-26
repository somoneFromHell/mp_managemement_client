import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { AlertBoxComponent } from './common/alert-box/alert-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceEntryComponent } from './components/attendance-entry/attendance-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './common/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DropdownComponent } from './common/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';
import { SelectEmployeeTypeComponent } from './components/select-employee-type/select-employee-type.component';
import { AttendanceTypeComponent } from './components/attendance-type/attendance-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AttendanceComponent,
    WorkersComponent,
    AlertBoxComponent,
    AttendanceEntryComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent,
    DropdownComponent,
    WorkerFormComponent,
    SelectEmployeeTypeComponent,
    AttendanceTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
