import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productList.service';
import {ActivatedRoute, Router} from "@angular/router"

import {SessionService} from "../services/session.service"


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name: string;
  price: number;
  error:string;
  products:any;
  router;
  constructor(public productList:ProductListService) {
    this.getProducts()
   }
  // goToHome() {
  //   this.router.navigate(['/']);  // <!-- Programmatically navigate to home
  
 
  getProducts(){
    this.productList.getProductInfo()
    .catch(e => this.error = e)
    .subscribe(products => {
      console.log("YA HE LLEGADO DE LA BBDD")
      this.products = products
    });
  }
}
