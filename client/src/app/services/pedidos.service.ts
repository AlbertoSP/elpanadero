import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface Pedido {
    name: string,
    price: number,
    latitud: number,
    longitud: number
  }
  @Injectable()
export class PedidoService {

  BASEURL:string = "http://localhost:3000"
  options:object = {withCredentials:true};
  // product:any; private http: Http
   constructor(private http: Http) { }
  
  private pedido:Pedido;

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }


nuevoPedido(name, price, latitud, longitud):Observable<any>{
  console.log("ENTRO EN NUEVO PEDIDO", name, price, latitud, longitud)
 return this.http.post(`${this.BASEURL}/api/pedido/nuevopedido`, {name,price,latitud,longitud}, this.options)
   .map(res => res.json())
   .catch(this.handleError);
}
cogerPedidos():Observable<any>{
  console.log("ENTRO EN coger PEDIDO")
 return this.http.get(`${this.BASEURL}/api/pedido/listpedidos`, this.options)
   .map(res => res.json())
   .catch(this.handleError);
}
}
