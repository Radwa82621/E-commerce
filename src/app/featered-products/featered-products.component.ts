import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servicrs/products.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-featered-products',
  templateUrl: './featered-products.component.html',
  styleUrls: ['./featered-products.component.css']
})
export class FeateredProductsComponent implements OnInit {
  allProducts:Product[]=[]
constructor(private _productService:ProductsService){

}
ngOnInit(): void {
  this.getAllProducts()
}
getAllProducts(){
  this._productService.getProducts().subscribe({
next:(res)=>{console.log(res);
  this.allProducts=res.data
}
  })
}
}
