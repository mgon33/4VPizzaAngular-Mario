import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})

export class Navbar {
  // Evento que avisa al padre de lo que se ha escrito en el buscador
  buscar = output<string>();

  cambiarPagina = output<string>();

  enviarBusqueda(texto: string) {
    this.buscar.emit(texto);
  }
}
