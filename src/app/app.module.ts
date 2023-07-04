import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavComponent } from './layout/nav/nav.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { AttendanceEntryComponent } from './pages/attendance/attendance-entry/attendance-entry.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/users/login/login.component';
import { WorkersModule } from './pages/workers/workers.module';
import { SharedModule } from './shared/shared.module';
      
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AttendanceComponent,
    AttendanceEntryComponent,
    DashboardComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    WorkersModule,
    SharedModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
