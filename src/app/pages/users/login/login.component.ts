import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userLogin } from 'src/app/interface/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `

<div class="container">
    <h2>Login</h2>
    <form method="post" [formGroup]="loginForm" (ngSubmit)="submitForm()">
      <label for="email">email:</label>
      <input formControlName="email" type="text" id="email" name="email" required>
      
      <label for="password">Password:</label>
      <input formControlName="password" type="password" id="password" name="password" required>
      
      <input type="submit" value="Login">
    </form>
  </div>

  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


constructor(private fb:FormBuilder,private service:AuthService){}

  loginForm = this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required])]
    })


    submitForm() {
      if(this.loginForm.invalid){
        return
      }
      this.service.signIn(<userLogin>{email:this.loginForm.value.email,password:this.loginForm.value.password})
    }

}
