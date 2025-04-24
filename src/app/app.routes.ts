import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';

export const routes: Routes = [
    {path: '', redirectTo : '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'quienessomos', component:QuienessomosComponent}
];
