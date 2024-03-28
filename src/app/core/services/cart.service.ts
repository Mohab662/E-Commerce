import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);

  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`;


  constructor(private _HttpClient:HttpClient) { }
  
  addToCart(prodId:string):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `cart`,
    {
      productId: prodId
  }
    )

  }

  getCardProduct():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`cart`)
  }

 removeCardProduct(prodId:string):Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `cart/${prodId}`)
 }

 updateCardProduct(prodId:string,countPro:number):Observable<any>{
  return this._HttpClient.put(this.baseUrl + `cart/${prodId}`,
  {
    count: countPro
  }
  )
}

clearCard():Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `cart`)
 }

 checkOut(cartId:string|null , orederInfio:object):Observable<any>{
  return this._HttpClient.post(this.baseUrl + 
    `orders/checkout-session/${cartId}?url=http://localhost:4200`,
    {
      shippingAddress:orederInfio
    }
    )
 }
 }



