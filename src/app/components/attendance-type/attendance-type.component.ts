import { Component } from '@angular/core';
import { attandanceTypeModel } from 'src/app/interface/attandance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-attendance-type',
  template: `
      <select name="choice">
    <option value="">-- select --</option>
  <option value="{{item.id}}" *ngFor="let item of attendanceTypedata"><fa-icon [icon]="star"></fa-icon> {{item.name}}</option>
</select> 
  `,
  styles: [
  ]
})
export class AttendanceTypeComponent {


  attendanceTypedata:attandanceTypeModel[] = []
  loading = false
  disabled =false
  star: IconProp = faStar;

  constructor(private service:AttendanceService){}
  ngOnInit(){
    this.getAttendanceTypeData()
  }

  getAttendanceTypeData(){
    this.service.getAttendanceTypeList().then((res:any)=>{
      if(res.error){
        this.loading = true
        console.log(res.error)
      }
      console.log(res.data)
      this.attendanceTypedata =res.data
    })
  }


}
