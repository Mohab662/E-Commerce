import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  //blank
  {path:'',canActivate:[authGuard],loadComponent:()=>import('./layouts/blank-layout/blank-layout.component')
  .then((m)=>m.BlankLayoutComponent),
  children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadComponent:()=>import('./Components/home/home.component').then((m)=>m.HomeComponent),title:"Home"},
    {path:'cart',loadComponent:()=>import('./Components/card/card.component').then((m)=>m.CardComponent),title:"Cart"},
    {path:'products',loadComponent:()=>import('./Components/products/products.component').then((m)=>m.ProductsComponent),title:"Products"},
    {path:'whishlist',loadComponent:()=>import('./Components/whishlist/whishlist.component').then((m)=>m.WhishlistComponent),title:"Whish List"},
    {path:'productDetails/:id',loadComponent:()=>import('./Components/details/details.component').then((m)=>m.DetailsComponent),title:"Details"},
    {path:'brands',loadComponent:()=>import('./Components/brands/brands.component').then((m)=>m.BrandsComponent),title:"Brands"},
    {path:'allorders',loadComponent:()=>import('./Components/allorders/allorders.component').then((m)=>m.AllordersComponent),title:"All Oreders"},
    {path:'forgetpassword',loadComponent:()=>import('./Components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent),title:"Forget Password"},
    {path:'payment/:id',loadComponent:()=>import('./Components/payment/payment.component').then((m)=>m.PaymentComponent),title:"Payments"},
    {path:'categories',loadComponent:()=>import('./Components/categories/categories.component').then((m)=>m.CategoriesComponent),title:"Categories"},
    {path:'categorydetails/:id',loadComponent:()=>import('./Components/categorydetails/categorydetails.component').then((m)=>m.CategorydetailsComponent),title:"Category Details"}


  ]},//Auth
  {path:'',loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
  .then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./Components/login/login.component').then((m)=>m.LoginComponent),title:"Login"},
    {path:'forgetpass',loadComponent:()=>import('./Components/forgetpassword/forgetpassword.component').then((m)=>m.ForgetpasswordComponent),title:"Forget Password"},
    {path:'register',loadComponent:()=>import('./Components/register/register.component').then((m)=>m.RegisterComponent),title:"Register"}
  ]},//Not-Found
  {path:'**',loadComponent:()=>import('./Components/not-found/not-found.component').then((m)=>m.NotFoundComponent),title:"notFoundPage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
