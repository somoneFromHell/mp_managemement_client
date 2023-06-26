import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  template: `
    <div class="alert-box">
      <div class="icon"> <p>{{icon}}</p></div>
      {{message}}

      <div class="buttons" *ngIf="shoButton">
        <button class="btn-blue" (click)="onYesClick()" >yas</button>
        <button class="btn-red" (click)="onNoClick()">nop</button>

      </div>
    </div>
  `,
  styleUrls: ['alert-AlertBoxComponent.component.scss']
})
export class AlertBoxComponent {

  icon ='🤨'
  message=' are you sure bro ?'
  shoButton = true
  

  onYesClick(){
    this.icon = '😀'
    this.message = 'data deleted successfully.'
  this.shoButton = false
    
  }

  onNoClick(){
    this.icon = '😑'
    this.message = 'ok what ever you want'
    this.shoButton = false
  }
}
