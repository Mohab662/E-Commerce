import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brands } from 'src/app/core/interfaces/brands';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brands:Brands[]=[]

  constructor(private _ProductService:ProductService){}

  ngOnInit(): void {
      this._ProductService.getBrands().subscribe({
        next:(response)=>{
          console.log(response.data);
          this.brands=response.data;
        }
      })
  }

}
