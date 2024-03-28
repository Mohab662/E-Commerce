import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router,private _FormBuilder:FormBuilder){}
  errMsg:string="";
  isLoading:boolean=false;

  loginForm:FormGroup=this._FormBuilder.group({
    email:['',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password:['',[Validators.required]]
  })
  /*
  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
  })*/

  handleForm():void{
    const userData=this.loginForm.value;
    this.isLoading=true;
    if (this.loginForm.valid==true) {
      this._AuthService.Login(userData).subscribe({
        next:(response)=>{
          if (response.message=='success') {
            localStorage.setItem('etoken',response.token);
            this._AuthService.decodeUser();
          this._Router.navigate(['/home']);
          this.isLoading=false;
        }
        },
        error:(err)=>{
          this.isLoading=false;
          this.errMsg=err.error.message;   
        }
      })
    }
  }

}
