import { Component } from '@angular/core';
import { PedidoService } from '../services/pedidos.service';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class MapaComponent {
  title: string = 'Order positions';
  name: string
  latitud: string ;
  longitud: string ;
  pedidos: any;
  constructor(public pedido: PedidoService) { 
    
  }

  ngOnInit() {
    this.pedido.cogerPedidos().subscribe( pedidos => {
      this.pedidos = pedidos;
      console.log(this.pedidos)
    });
  }
  
}