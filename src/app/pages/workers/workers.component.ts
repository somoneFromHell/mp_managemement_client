import { Component } from '@angular/core';
import { workersModel } from 'src/app/interface/workers';
import { WorkersService } from 'src/app/services/workers.service';
import { faCircleCheck ,faCircleXmark,faPenToSquare,faTrashAlt,faPlusSquare} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-workers',
  templateUrl:'./workers.component.html',
  styleUrls: ['workers.component.scss']
})
export class WorkersComponent {

  constructor( private service:WorkersService){}

  workersList:workersModel[] = []
  yas = faCircleCheck
  no = faCircleXmark
  edit = faPenToSquare
  delete = faTrashAlt
  add = faPlusSquare

  hideForm = true;

  ngOnInit(){
    this.loadWorkersData()
  }

  goToform() {
    this.hideForm = !this.hideForm
    console.log(this.hideForm)
  }

  hideTheForm(value:any) {
    this.hideForm = value
  }
    
  loadWorkersData(){
    this.service.getWorkerData().then(({data,error}) =>{
      if(error){
        console.error(error)
      }
      console.log(data)
      this.workersList = <any>data
    })
  }
  
  insertNewWorkerData(newworkerData:workersModel){
    this.service.addNewWorker(newworkerData).then(({data,error})=>{
      if(error){
        console.error(error)
      }
      console.log(data)
    })
  }

}
