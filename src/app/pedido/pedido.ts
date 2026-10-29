import { Component, input } from '@angular/core';
import { LineaPedidoModel } from '../models/linea-pedido';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.scss',
  templateUrl: './pedido.html',
})
export class Pedido {
  // Líneas del pedido que le pasa App
  lineas = input<LineaPedidoModel[]>([]);

  // Precio total de todo el pedido 
  get total(){
    let suma = 0;
    for(let linea of this.lineas()){
      suma += linea.pizza.precio * linea.cantidad;
    }
    return suma;
  }
}
