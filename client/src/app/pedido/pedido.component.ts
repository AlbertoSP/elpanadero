import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedidos.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class MyNuevoPedidoComponent implements OnInit {
  name: String;
  price: Number;
  latitud: Number;
  longitud: Number;
  error: any;

  constructor(public instanciadepedido: PedidoService, private router: Router) { }

  ngOnInit() { }

  submitForm() {
    // console.log(this.name, this.price);
    this.instanciadepedido.nuevoPedido(this.name, this.price, this.latitud, this.longitud).subscribe(data => {
      console.log(data);
      this.router.navigate(["/list"]);
    }, err => (this.error = err));
  }
}
