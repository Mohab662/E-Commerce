import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _FormBuilder:FormBuilder , private _CartService:CartService){}
  cartId:string|null='';
  isLoading:boolean=false;
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parms)=>{
       this.cartId= parms.get('id')
      }
    })
      
  }

  orderForm:FormGroup=this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })

  handleForm():void{
    const userData=this.orderForm.value;
    this.isLoading=true;
    this._CartService.checkOut(this.cartId,userData).subscribe({
      next:(response)=>{
        if (response.status=='success') {
          this.isLoading=false;
          window.open(response.session.url,'_self');
        }
      },
      error:(err)=>{
        this.isLoading=false;
      }
    })
  }



}
