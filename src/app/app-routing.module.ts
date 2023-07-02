import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkersComponent } from './pages/workers/workers.component';

const routes: Routes = [
  {path:'employees',component:WorkersComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
