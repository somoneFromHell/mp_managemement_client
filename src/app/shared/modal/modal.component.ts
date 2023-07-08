import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl:'modal.component.html',
  styleUrls:['modal.component.scss']
})
export class ModalComponent {

  @Input() showModal = true

  ngOnInit(){

  }

  closeModal() {
this.showModal = !this.showModal
console.log(this.showModal)
}

}
