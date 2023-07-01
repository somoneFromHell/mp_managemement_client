import { Component, EventEmitter, Input, Output} from '@angular/core';
import { attandanceTypeModel } from 'src/app/interface/attandance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-attendance-type',
  template: `
      <select name="choice" [(ngModel)]="selectedValue" (change)="getSelectedValue.emit(selectedValue)" >
    <option value="">-- select --</option>
  <option value="{{item.id}}" *ngFor="let item of attendanceTypedata"><fa-icon [icon]="star"></fa-icon> {{item.name}}</option>
</select> 
  `,
  styles: [
  ]
})
export class AttendanceTypeComponent {

  @Output() getSelectedValue = new EventEmitter<string>();

  attendanceTypedata: attandanceTypeModel[] = []
  loading = false
  disabled = false
  star: IconProp = faStar;
  selectedValue:string = '1';

  constructor(private service: AttendanceService) { }
  ngOnInit() {
    this.getAttendanceTypeData()
  }

  getAttendanceTypeData() {
    this.service.getAttendanceTypeList().then((res: any) => {
      if (res.error) {
        this.loading = true
      }
      this.attendanceTypedata = res.data
    })
  }
}
