import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  porductId!:string|null;
  productDetails:any=null;

  constructor(private _ActivatedRoute:ActivatedRoute,private _CartService:CartService,private _ToastrService:ToastrService, private _ProductService:ProductService ,private _Renderer2:Renderer2){}

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{
        this.porductId=parms.get('id')
        }
      })
      this._ProductService.getPrudctDetails(this.porductId).subscribe({
        next:({data})=>{
          this.productDetails=data;
        }
      })
  }

  productDeatilsOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items:1,    
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    nav: false
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

}
