import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  cartProduct:any=null;
  constructor(private _CartService:CartService,private _Renderer2:Renderer2, private _ToastrService:ToastrService){}
  test:any=0;


  ngOnInit(): void {   
    this.test=this._CartService.cartNumber;
    if (this.test._value!==0) {
      this._CartService.getCardProduct().subscribe({
        next:(response)=>{
          if(response.numOfCartItems!==0){this.cartProduct=response.data;}
        }
      }) 
    }
    
  }

  removeItem(id:string , btnRemove:HTMLButtonElement):void{
    this._Renderer2.setAttribute(btnRemove,'disabled','true');
    if(this.cartProduct){
      this._CartService.removeCardProduct(id).subscribe({
        next:(response)=>{
          this._ToastrService.info('Deleted Successfull')
          this._Renderer2.removeAttribute(btnRemove,'disabled');
          this.cartProduct=response.data;
          this._CartService.cartNumber.next(response.numOfCartItems);
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(btnRemove,'disabled');
          this._ToastrService.info('Deleted Successfull');
        }
      })
    }
   
  }

  
  changeCount(count:number,id:string,btn:HTMLButtonElement ):void{
    if (count>=1) {
      this._Renderer2.setAttribute(btn,'disabled','true');
      this._CartService.updateCardProduct(id,count).subscribe({
        next:(response)=>{
          this._Renderer2.removeAttribute(btn,'disabled');
          this.cartProduct=response.data;
          
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(btn,'disabled');
        }
      })
    }
  }

  clearCart():void{
    this._CartService.clearCard().subscribe({
      next:(response)=>{
        this._ToastrService.info('All Products Are Deleted')
        this.cartProduct=null;
        this._CartService.cartNumber.next(0);
      }
    })
  }

}
