"use strict";(self.webpackChunkE_Commerce=self.webpackChunkE_Commerce||[]).push([[449],{6449:(l,c,a)=>{a.r(c),a.d(c,{CategorydetailsComponent:()=>s});var n=a(6814),t=a(4769),g=a(1120),i=a(0);function _(r,d){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",3)(5,"h2"),t._uU(6),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("src",e.categoryDetails.image,t.LSH)("alt",e.categoryDetails.name),t.xp6(3),t.Oqu(e.categoryDetails.name)}}let s=(()=>{class r{constructor(e,o){this._ActivatedRoute=e,this._ProductService=o,this.categoryId="",this.categoryDetails={}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.categoryId=e.get("id")}}),this._ProductService.getCategoryDetails(this.categoryId).subscribe({next:e=>{this.categoryDetails=e.data}})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(g.gz),t.Y36(i.M))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-categorydetails"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","container shadow bg-main-light p-3 my-4 rounded mx-auto",4,"ngIf"],[1,"container","shadow","bg-main-light","p-3","my-4","rounded","mx-auto"],[1,"row","g-4","align-items-center"],[1,"col-md-6","text-center"],[1,"w-75",3,"src","alt"]],template:function(o,u){1&o&&t.YNc(0,_,7,3,"section",0),2&o&&t.Q6J("ngIf",u.categoryDetails.image)},dependencies:[n.ez,n.O5]})}return r})()},0:(l,c,a)=>{a.d(c,{M:()=>g});var n=a(4769),t=a(9862);let g=(()=>{class i{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getPrudcts(s=1){return this._HttpClient.get(this.baseUrl+`products?page=${s}`)}getPrudctDetails(s){return this._HttpClient.get(this.baseUrl+`products/${s}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(s){return this._HttpClient.get(this.baseUrl+`categories/${s}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}static#t=this.\u0275fac=function(r){return new(r||i)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);