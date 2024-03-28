import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordService } from 'src/app/core/services/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, ],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string="";
  userMes:string='';

  constructor(private _ForgetpasswordService:ForgetpasswordService , private _Router:Router){}

  forgetForm:FormGroup=new FormGroup({
    email:new FormControl('')
  })
  resetCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  })
  resetPassForm:FormGroup=new FormGroup({
    newPassword:new FormControl('')
  })

  forgetPassword():void{
    let userEmail=this.forgetForm.value;
    this.email=userEmail.email;
    this._ForgetpasswordService.forgetPassword(userEmail).subscribe({
      next:(response)=>{
        console.log(response);
        this.userMes=response.message;
        this.step1=false;
        this.step2=true;
      },
      error:(err)=>{
        this.userMes=err.error.message;
      }
    })
  }

  resetCode():void{
    let resetCode=this.resetCodeForm.value;
    this._ForgetpasswordService.resetCode(resetCode).subscribe({
      next:(response)=>{
        console.log(response);
        this.userMes='Success';
        this.step2=false;
        this.step3=true;
      },
      error:(err)=>{
        this.userMes=err.error.message;
      }
    })
  }


  newPassword():void{
    let newPass=this.resetPassForm.value;
    newPass.email=this.email;
    this._ForgetpasswordService.newPassword(newPass).subscribe({
      next:(response)=>{
        if (response.token) {
          localStorage.setItem('_token',response.token);
          this._Router.navigate(['/home']);
        }
      },
      error:(err)=>{
        this.userMes=err.error.message;
      }
    })
  }
}
