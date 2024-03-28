import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-categorydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.scss']
})
export class CategorydetailsComponent implements OnInit {

  categoryId:string|null='';
  categoryDetails:Category={} as Category

  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService){}
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{
          this.categoryId=parms.get('id');
        }
      });

      this._ProductService.getCategoryDetails(this.categoryId).subscribe({
        next:(response)=>{
          this.categoryDetails=response.data;

        }
      })
  }

}
