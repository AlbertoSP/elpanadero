import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface Product {
    name: string,
    price: number 
  }
  @Injectable()
export class ProductListService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  // product:any; private http: Http
   constructor(private http: Http) { }
  
  private product:Product;

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  

  getProductInfo():Observable<any>{
     return this.http.get(`${this.BASEURL}/api/product/list`,this.options)
      .map(res => res.json())
 }
 
 newProduct(name, price):Observable<any>{
   console.log("ENTRO EN NUEVO PRODUCTO", name, price)
  return this.http.post(`${this.BASEURL}/api/product/new`, {name,price}, this.options)
    .map(res => res.json())
    .catch(this.handleError);
}
 
 
}
