import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas/ofertas.component';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';
import { CompraComponent } from './paginas/compra/compra.component';

export const routes: Routes = [
    {path: '', redirectTo : '/inicio', pathMatch: 'full'},
    {path: 'productos', component:ProductosComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'quienessomos', component:QuienessomosComponent},
    {path: 'carrito', component:CarritoComponent},
    {path: 'compra', component:CompraComponent}
    
];
