"use strict";(self.webpackChunkE_Commerce=self.webpackChunkE_Commerce||[]).push([[411],{411:(d,a,r)=>{r.r(a),r.d(a,{BrandsComponent:()=>u});var o=r(6814),t=r(4769),i=r(0);function n(e,l){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&e){const s=l.$implicit;t.xp6(2),t.Q6J("src",s.image,t.LSH)("alt",s.name),t.xp6(2),t.Oqu(s.name)}}let u=(()=>{class e{constructor(s){this._ProductService=s,this.brands=[]}ngOnInit(){this._ProductService.getBrands().subscribe({next:s=>{console.log(s.data),this.brands=s.data}})}static#t=this.\u0275fac=function(c){return new(c||e)(t.Y36(i.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],["role","button",1,"border","border-success","shadow","rounded","p-2"],["height","320",1,"w-100",3,"src","alt"],[1,"text-main","text-center","bg-white"]],template:function(c,_){1&c&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,n,5,3,"div",2),t.qZA()()),2&c&&(t.xp6(2),t.Q6J("ngForOf",_.brands))},dependencies:[o.ez,o.sg]})}return e})()},0:(d,a,r)=>{r.d(a,{M:()=>i});var o=r(4769),t=r(9862);let i=(()=>{class n{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getPrudcts(e=1){return this._HttpClient.get(this.baseUrl+`products?page=${e}`)}getPrudctDetails(e){return this._HttpClient.get(this.baseUrl+`products/${e}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getCategoryDetails(e){return this._HttpClient.get(this.baseUrl+`categories/${e}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"brands")}static#t=this.\u0275fac=function(l){return new(l||n)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);