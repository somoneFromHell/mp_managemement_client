import { Component } from '@angular/core';
import { workersModel } from 'src/app/interface/workers';
import { WorkersService } from 'src/app/services/workers.service';
import { faCircleCheck ,faCircleXmark,faPenToSquare,faTrashAlt,faPlusSquare} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-worker-table',
  templateUrl:'worker-table.component.html',
  styleUrls:['./worker-table.component.scss']
})
export class WorkerTableComponent {
 showForm: boolean = false;

  constructor( private service:WorkersService){}

  workersList:workersModel[] = []
  yas = faCircleCheck
  no = faCircleXmark
  edit = faPenToSquare
  delete = faTrashAlt
  add = faPlusSquare

  hideForm = true;

  ngOnInit(){
    this.service.getWorkerData().then((res:any)=>{
      this.workersList = res
    })
  }

  onClickAdd(){
    this.showForm = !this.showForm
  }


}
