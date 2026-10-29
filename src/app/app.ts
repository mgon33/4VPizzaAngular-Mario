import { Component, output, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Header } from './header/header';
import { ListaPizzas } from './lista-pizzas/lista-pizzas';
import { Formulario } from './formulario/formulario';
import { Footer } from './footer/footer';
import { LineaPedidoModel } from './models/linea-pedido';
import { Pedido } from './pedido/pedido';

@Component({
  imports: [Navbar, Header, ListaPizzas, Formulario, Footer, Pedido],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Último texto escrito en el buscador del navbar
  textoBusqueda = signal('');

  // Señal para guardar página actual
  paginaActual = signal("ListaPizzas");

  //Lineas del pedido que se van acumulando
  lineasPedido = signal<LineaPedidoModel[]>([]);

  anadirAlPedido(linea: LineaPedidoModel){
    let lineas = this.lineasPedido();
    let existente = lineas.find(l => l.pizza.nombre === linea.pizza.nombre);

    if (existente){
      // Si la pizza ya estaba en el pedido, sumamos la cantidad
      existente.cantidad += linea.cantidad;
      this.lineasPedido.set([...lineas]);
    } else {
      // Si es nueva, la añadimos al final
      this.lineasPedido.set([...lineas, linea]);
    }
  }

  vaciarPedido(){
    this.lineasPedido.set([]);
    // Volver a la lista de pizzas al limpiar el pedido
    this.paginaActual.set("ListaPizzas");
  }
}