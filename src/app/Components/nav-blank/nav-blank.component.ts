import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit{
  constructor( private _Router:Router , private _CartService:CartService,private _Renderer2:Renderer2,private _WhishlistService:WhishlistService){}

   


  cartNum:number=0;
  whishListNum:number=0;
  test:any=0;

  ngOnInit(): void {   

    this.test=this._CartService.cartNumber;
    console.log(this._CartService.cartNumber);
    if (this.test._value!==0) {
    this._CartService.getCardProduct().subscribe({
      next:(response)=>{
        this.cartNum=response.numOfCartItems;
      }
    })}


    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartNum=data;
        console.log(data);
      },
    });


    this._WhishlistService.getWhishList().subscribe({
      next:(response)=>{
        this.whishListNum=response.data.length;
      }
    });
      
      this._WhishlistService.whishListNumber.subscribe({
        next:(data)=>{
          this.whishListNum=data;
        },
      });

  }

  signOut():void{
    this._Router.navigate(['/login']);
    localStorage.removeItem('etoken');
  }

}
