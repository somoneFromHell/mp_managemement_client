import { Component } from '@angular/core';
import {faChartColumn, faPeopleGroup,faPenSquare} from '@fortawesome/free-solid-svg-icons'

export interface navModel{
  id:number,
  icon:string,
  tag:string,
  routerLink:string
}

@Component({
  selector: 'app-nav',
  templateUrl:'nav.component.html',
  styleUrls:['./nav.component.scss']
  
})
export class NavComponent {

  employeesIcon = faPeopleGroup
  attandanceIcon = faPenSquare
  dashboardIcon = faChartColumn

  activeLink = 1

  navlinks:navModel[] = [
    {id:1,icon:"fa-chart-line",tag:'Dashboard',routerLink:'dashboard'},
    {id:2,icon:"fa-users",tag:'Worker',routerLink:'employees'},
    {id:3,icon:"fa-calendar-check",tag:'Attendance',routerLink:'attendance'}
  ]


  makeLinkActive(linkId:number){
    this.activeLink = linkId
  }

}
