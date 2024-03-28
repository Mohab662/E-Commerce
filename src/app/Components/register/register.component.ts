import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errMsg:string="";
  isLoading:boolean=false;

  constructor(private _AuthService:AuthService,private _Router:Router, private _FormBuilder:FormBuilder){}

  registerForm:FormGroup=this._FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    password:['',[Validators.required]],
    rePassword:['',],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]]
  },{validators:[this.confirmPassword]} as FormControlOptions)

/*
  registerForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword:new FormControl(''),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators:[this.confirmPassword]} as FormControlOptions)
*/
  confirmPassword(group:FormGroup):void{
    const password=group.get('password');
    const rePassword=group.get('rePassword');

    if(rePassword?.value==""){
      rePassword?.setErrors({required:true});
    }
    else if(password?.value!=rePassword?.value){
      rePassword?.setErrors({mismatch:true});
    }

  }

  handleForm():void{
    const userData=this.registerForm.value;
    this.isLoading=true;
    if (this.registerForm.valid==true) {
      this._AuthService.Register(userData).subscribe({
        next:(response)=>{
          if (response.message=='success') {
            this._Router.navigate(['/login'])
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
