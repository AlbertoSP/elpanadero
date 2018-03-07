import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productList.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-signup-form',
  templateUrl: './newproduct.component.html',
  styles: []
})
export class MyNewProductComponent implements OnInit {
name: String;
price: Number;
error:string;


  constructor(public jesus:ProductListService, private router: Router ) { }

  ngOnInit() {}
  
  submitForm(name, price) {
    console.log(this.name, this.price);
    this.jesus.newProduct(this.name, this.price).subscribe(data => {
      console.log(data);
      this.router.navigate(["/list"]);
    }, err => (this.error = err));
  }
}