import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { RouterLink } from '@angular/router';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CutTextPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
  products:Product[]=[];
  pageSize:number=0;
  currentPage:number=1;
  total:number=0;
  whishListData:string[]=[]
  whishListLength:number=0;


  ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
}

  constructor(private _ProductService:ProductService ,private _CartService:CartService,private _ToastrService:ToastrService,private _Renderer2:Renderer2,private _WhishlistService:WhishlistService){}
  ngOnInit(): void {
    this._ProductService.getPrudcts().subscribe({
      next:(response)=>{
        this.products=response.data;
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results;       
      }
    });

    this._WhishlistService.getWhishList().subscribe({
      next:(response)=>{
        const newData=response.data.map((item:any)=>item.id)
        this.whishListData=newData;   
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

  pageChanged(event:any):void{
    this._ProductService.getPrudcts(event).subscribe({
      next:(response)=>{
        console.log(response);
        this.products=response.data;
        this.pageSize=response.metadata.limit;
        this.currentPage=response.metadata.currentPage;
        this.total=response.results;       
      }
    }); 
  }

  addToWhishList(proId:string|undefined):void{

    this._WhishlistService.addToWhishList(proId).subscribe({
      next:(response)=>{
        this.whishListLength=response.data.length;
        this._ToastrService.success(response.message);
        this.whishListData=response.data;
        this._WhishlistService.whishListNumber.next(this.whishListLength);
      }
    })
  }

  removeFav(id:string|undefined):void{
    this._WhishlistService.removeFromWhishList(id).subscribe({
      next:(response)=>{
        this.whishListLength=response.data.length;
        this._ToastrService.info(response.message);
        this.whishListData=response.data;
        this._WhishlistService.whishListNumber.next(this.whishListLength);
      }
    })
  }



}
