import { Component } from '@angular/core';
import { PedidoService } from '../services/pedidos.service';

@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class MapaComponent {
  title: string = 'repaaartee panadeeeroo';
  lat: number = 51.678418;
  lng: number = 7.809007;
  lat2: number = 41.678418;
  lng2: number = 17.809007;
  pedidos: any;
  constructor(public pedido: PedidoService) { 
    
  }

  ngOnInit() {
    this.pedido.cogerPedidos().subscribe( pedidos => {
      this.pedidos = pedidos;
    });
  }
  
}