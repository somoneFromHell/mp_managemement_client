import { Component } from '@angular/core';
import {faChartColumn, faPeopleGroup,faPenSquare} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav',
  templateUrl:'nav.component.html',
  styleUrls:['./nav.component.scss']
  
})
export class NavComponent {

  employeesIcon = faPeopleGroup
  attandanceIcon = faPenSquare
  dashboardIcon = faChartColumn
}
