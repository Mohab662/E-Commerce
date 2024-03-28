import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule,RouterLink,CutTextPipe],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {
  products:Product[]=[];
  whishListData:string[]=[]
  constructor(private _WhishlistService:WhishlistService,private _ToastrService:ToastrService,private _Renderer2:Renderer2 , private _CartService:CartService){}
  
  
  ngOnInit(): void {
      this._WhishlistService.getWhishList().subscribe({
        next:(response)=>{
          console.log(response);
          this.products=response.data;
        }
      })
      this._WhishlistService.getWhishList().subscribe({
        next:(response)=>{
          const newData=response.data.map((item:any)=>item.id)
          this.whishListData=newData;   
        }
      })
  }
  ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
}
  addToWhishList(proId:string|undefined):void{
    this._WhishlistService.addToWhishList(proId).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.success(response.message);
      }
    })
  }
  addProduct(id:any,elment:HTMLButtonElement):void{
    this._Renderer2.setAttribute(elment,'disabled','true');

    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message,"",{easeTime: 500});
        this._Renderer2.removeAttribute(elment,'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error:(err)=>{
        this._Renderer2.removeAttribute(elment,'disabled');
      }
    })

  }
  removeFav(id:string|undefined):void{
    this._WhishlistService.removeFromWhishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._ToastrService.info(response.message);
        this.whishListData=response.data;
       const newData=this.products.filter((item:any)=>this.whishListData.includes(item._id))
       this.products=newData;
       this._WhishlistService.whishListNumber.next(response.data.length);
        


      }
    })
  }



}
