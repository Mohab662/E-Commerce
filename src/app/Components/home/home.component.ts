import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/interfaces/product';
import { CutTextPipe } from 'src/app/core/pipe/cut-text.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interfaces/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhishlistService } from 'src/app/core/services/whishlist.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutTextPipe,CarouselModule,RouterLink,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:Product[]=[];
  categories:Category[]=[];
  term:string="";
  whishListData:string[]=[]
  whishListLength:number=0;

  test:any=0;

   ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
}


  constructor(private _ProductService:ProductService,private _CartService:CartService,private _ToastrService:ToastrService,private _Renderer2:Renderer2,private _WhishlistService:WhishlistService){}

  ngOnInit(): void {

    this.test=this._CartService.cartNumber;
    
    this._CartService.getCardProduct().subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error:(err)=>{console.log(err.message);
      }
    });


    this._ProductService.getPrudcts().subscribe({
      next:(response)=>{
        this.products=response.data;
      }
    });

    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
        
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

  


  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    nav: false
  }
  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  



}
