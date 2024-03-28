import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userInfo:any;

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth/`;
  
  Register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'signup',userData);
  }
  Login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + 'signin',userData);
  }

  decodeUser():void{
    const encode=localStorage.getItem('etoken');
    if (encode!==null) {
      const decode=jwtDecode(encode);
      this.userInfo=decode;
      console.log(decode);
      
    }
  }


}
