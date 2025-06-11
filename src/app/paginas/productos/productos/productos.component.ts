import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CarritoComponent } from '../../carrito/carrito/carrito.component';
import { CarritoService } from '../../../servicios/carrito.service';
import { Producto } from '../../../modelos/producto.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  Productos: Producto[] = [

    {
      id: 1,
      nombre: 'sna',
      descripcion: 'ke',
      precio: 10,
      imagen: '/asset/snake.gif',
      disponibilidad: true
    },

    {
      id: 2,
      nombre: 'nyan',
      descripcion: 'cat',
      precio: 999,
      imagen: '/asset/nyan.gif',
      disponibilidad: true
    }
  ];

  productos = [];

  constructor(private carritoService: CarritoService) { }

  //metodo para agregar un producto al carrito

  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); //Muestra el mensaje
  }
}
