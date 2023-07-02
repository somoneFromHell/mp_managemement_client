import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userLogin } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <form [formGroup]="loginForm" (ngSubmit)="submitForm()">
    <label  for="email">email</label>
    <input formControlName="email" fomr type="email" id="email">

    <label for="password">password</label>
    <input formControlName="password" type="password" id="password">

    <button type="submit" class="btn btn-blue">submit</button>
  </form>
  `,
  styles: [
  ]
})
export class LoginComponent {
submitForm() {
  if(this.loginForm.invalid){
    return
  }
  this.service.signIn(<userLogin>this.loginForm.value)
}

constructor(private fb:FormBuilder,private service:AuthService){}

  loginForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required])]
    })

}
