import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.scss',
  templateUrl: './formulario.html',
})

export class Formulario {
  //FormGroup agrupa todos los campos del formulario
  pedidoForm = new FormGroup({
    direccion: new FormControl("", [Validators.required,Validators.minLength(5)]),
    hora: new FormControl("", Validators.required),
    metodoPago: new FormControl("",Validators.required),
    numTarjeta: new FormControl({value: "", disabled: true},[Validators.required ,Validators.pattern('[0-9]{16}')]),
    telefono: new FormControl({value: "", disabled: true}, [Validators.required,Validators.pattern('[0-9]{9}')])
  });

    limpiar = output();

  // Getters para usar los campos en el template
  get direccion(){
    return this.pedidoForm.get("direccion");
  }

   get hora() {
    return this.pedidoForm.get('hora');
  }

  get metodoPago() {
    return this.pedidoForm.get('metodoPago');
  }

  get numTarjeta() {
    return this.pedidoForm.get('numTarjeta');
  }

  get telefono() {
    return this.pedidoForm.get('telefono');
  }

  cambiarMetodoPago(){
    if(this.metodoPago?.value === 'tarjeta'){
      this.numTarjeta?.enable();
      this.telefono?.disable();
    } else{
      this.telefono?.enable();
      this.numTarjeta?.disable();
    }
  }

  enviarPedido(){
    alert("Pedido enviado: \nDirección: " + this.pedidoForm.value.direccion +
          "\nHora: " + this.pedidoForm.value.hora +
          "\nPago: " + this.pedidoForm.value.metodoPago +
          "\n ¡Muchas Gracias!");

    this.limpiar.emit();
    this.pedidoForm.reset();
  }
}
