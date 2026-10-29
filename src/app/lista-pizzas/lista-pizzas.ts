import { Component, input, output } from '@angular/core';
import { PizzaModel } from '../models/pizza';
import { TarjetaPizza } from '../tarjeta-pizza/tarjeta-pizza';
import { LineaPedidoModel } from '../models/linea-pedido';

@Component({
  imports: [TarjetaPizza],
  selector: 'app-lista-pizzas',
  styleUrl: './lista-pizzas.scss',
  templateUrl: './lista-pizzas.html',
})

export class ListaPizzas {
  // Texto de busqueda que llega desde App
  busqueda = input<string>("");

  //Reenvia a App la pizza que una tarjeta quiere añadir
  anadirPizza = output<LineaPedidoModel>();

  // Lista completa de pizzas a pintar
  pizzas: PizzaModel[] = [];

  constructor() {
    let margarita = new PizzaModel('Margarita', 10,
      'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300',
      ['Tomate', 'Mozzarella', 'Albahaca']);
    let pepperoni = new PizzaModel('Pepperoni', 12,
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300',
      ['Tomate', 'Mozzarella', 'Pepperoni']);
    let cuatroQuesos = new PizzaModel('Cuatro Quesos', 13,
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300',
      ['Mozzarella', 'Gorgonzola', 'Parmesano', 'Fontina']);
    let barbacoa = new PizzaModel('Barbacoa', 14,
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
      ['Salsa BBQ', 'Carne picada', 'Pollo', 'Bacon']);

    this.pizzas = [margarita, pepperoni, cuatroQuesos, barbacoa];
  }

  get pizzasFiltradas() {
    return this.pizzas.filter(pizza =>
      pizza.ingredientes.some(ing => ing.toLowerCase().includes(this.busqueda().toLowerCase().trim()))
    );
  }

  
}
