import { Component, input, output} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzaModel } from '../models/pizza';
import { LineaPedidoModel } from '../models/linea-pedido';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-tarjeta-pizza',
  styleUrl: './tarjeta-pizza.scss',
  templateUrl: './tarjeta-pizza.html',
})

export class TarjetaPizza {
  // Pizza que le pasa el padre (la lista)
  pizza = input.required<PizzaModel>();

  // Cantidad de pizzas a añadir: mínimo 1
  cantidad = new FormControl(1, [Validators.required, Validators.min(1)]);

  // Avisa al padre de que se quiere añadir esta piza al pedido
  anadirPizza = output<LineaPedidoModel>();

  anadir(){
    let linea = new LineaPedidoModel(this.pizza(), this.cantidad.value!);
    this.anadirPizza.emit(linea);
    this.cantidad.setValue(1); // Vuelve a 1 para la próxima vez
  }
}