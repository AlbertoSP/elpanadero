import { Component } from '@angular/core';
import { PedidoService } from '../services/pedidos.service';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class MapaComponent {
  title: string = 'repaaartee panadeeeroo';
  name: string
  latitud: number = 51.678418;
  longitud: number = 7.809007;
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