import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-productos, app-usuario, app-clases, app-formulario, app-mi-formulario',
  imports: [NgFor], 
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 150 },
    { nombre: 'Producto 3', precio: 200 }
  ]; 
  
  /*
  usuario = {
    nombre: 'Facu',
    isLoggedIn: true
  };
  */

  /*
  usuario = {
    nombre: 'Facu',
    activo: true
  };
  */
  
  /*
  
  */

  

}
