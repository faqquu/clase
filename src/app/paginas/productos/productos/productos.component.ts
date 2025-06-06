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
      nombre: 'Hola',
      descripcion: 'Mundo',
      precio: 10,
      imagen: 'https://preview.redd.it/variable-quality-hideo-kojima-thinking-v0-tbztklkehktc1.jpg?width=640&crop=smart&auto=webp&s=61c8fe0e3169b69829af8d919ce32160de9ecfe0',
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
