import { PizzaModel } from './pizza';

// Una línea del pedido: qué pizza y cuántas
export class LineaPedidoModel {
  pizza: PizzaModel;
  cantidad: number;

  constructor(pizza: PizzaModel, cantidad: number) {
    this.pizza = pizza;
    this.cantidad = cantidad;
  }
}