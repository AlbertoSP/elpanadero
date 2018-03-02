import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface Product {
    name: String,
    price: String
  }
  @Injectable()
export class ProductListService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  product:any;
  constructor(private http: Http) { }
  
  getProductt(){
    return this.product;
  }
  
  getProduct(name:string, price:number):Observable<any>{
    return this.http.post(`${this.BASEURL}/api/product/list`, {name,price},this.options)
      .map(res => res.json())
  }
}