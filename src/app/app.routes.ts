import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { ProductosComponent } from './productos/productos/productos.component';

export const routes: Routes = [
    {path: '', redirectTo : '/inicio', pathMatch: 'full'},
    {path: 'inicio', component:InicioComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'productos', component:ProductosComponent}
];
