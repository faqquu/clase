import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    {
      nombre: 'Producto 1',
      precio: 100,
      imagen: "https://preview.redd.it/variable-quality-hideo-kojima-thinking-v0-tbztklkehktc1.jpg?width=640&crop=smart&auto=webp&s=61c8fe0e3169b69829af8d919ce32160de9ecfe0"
    },

    {
      nombre: 'Producto 2',
      precio: 150
    },

    {
      nombre: 'Producto 3',
      precio: 200
    }
  ];

}