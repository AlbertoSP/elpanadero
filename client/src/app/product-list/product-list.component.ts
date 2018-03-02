import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name: string;
  price: number;
  error:string;
  product:any;
  constructor(public productList:ProductListService) { }

  
 
  getProduct(){
    this.productList.getProduct(this.name,this.price)
    .catch(e => this.error = e)
    .subscribe(product=> {
      console.log("YA HE LLEGADO DE LA BBDD")
      this.product = product
    });
  }
}
