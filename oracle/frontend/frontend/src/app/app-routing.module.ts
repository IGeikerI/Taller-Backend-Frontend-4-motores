import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearTipoProductoComponent } from './Components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
import { MostrarTipoProductoComponent } from './Components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './Components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { EliminarTipoProductoComponent } from './Components/tipoProducto/eliminar-tipo-producto/eliminar-tipo-producto.component';

import { MostrarProductosComponent } from './Components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './Components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './Components/producto/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './Components/producto/eliminar-producto/eliminar-producto.component';

import { MostrarVentasComponent } from './Components/venta/mostrar-venta/mostrar-venta.component';
import { CrearVentaComponent } from './Components/venta/crear-venta/crear-venta.component';
import { ActualizarVentaComponent } from './Components/venta/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './Components/venta/eliminar-venta/eliminar-venta.component';

import { CrearClienteComponent } from './Components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './Components/cliente/mostrar-cliente/mostrar-cliente.component';
import { ActualizarClienteComponent } from './Components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './Components/cliente/eliminar-cliente/eliminar-cliente.component';


const routes: Routes = [

  {
    path: "crear-cliente",
    component: CrearClienteComponent

  },
  {
    path : "mostrar-cliente",
    component: MostrarClienteComponent
  },
  {
    path: "actualizar-cliente",
    component: ActualizarClienteComponent
  },
  {
    path: "eliminar-cliente",
    component: EliminarClienteComponent
  },
  {
    path: "crear-tipo-producto",
    component: CrearTipoProductoComponent
  },
  {
    path: "actualizar-tipo-producto",
    component: ActualizarTipoProductoComponent
  },
  {
    path: "mostrar-tipo-producto",
    component: MostrarTipoProductoComponent
  },
  {
    path: "eliminar-tipo-producto",
    component: EliminarTipoProductoComponent
  },

  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "actualizar-producto",
    component: ActualizarProductoComponent
  },
  {
    path: "mostrar-producto",
    component: MostrarProductosComponent
  },
  {
    path: "eliminar-producto",
    component: EliminarProductoComponent
  },
  

  {
    path: "crear-venta",
    component: CrearVentaComponent
  },
  {
    path: "actualizar-venta",
    component: ActualizarVentaComponent
  },
  {
    path: "mostrar-venta",
    component: MostrarVentasComponent
  },
  {
    path: "eliminar-venta",
    component: EliminarVentaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }