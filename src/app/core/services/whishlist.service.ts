import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`;
  whishListNumber:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }

  addToWhishList(proId:string|undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`wishlist`,
    {
      productId: proId
  }
    )
  }

  getWhishList():Observable<any>{
    return this._HttpClient.get(this.baseUrl+`wishlist`)
  }

  removeFromWhishList(proId:string|undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl+`wishlist/${proId}`);
  }


}
