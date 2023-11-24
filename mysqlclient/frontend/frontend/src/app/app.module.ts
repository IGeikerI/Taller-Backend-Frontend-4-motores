import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/layout/header/header.component';
import { ContentComponent } from './Components/layout/content/content.component';
import { FooterComponent } from './Components/layout/footer/footer.component';
import { AsideComponent } from './Components/layout/aside/aside.component';

import { MostrarTipoProductoComponent } from './Components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './Components/tipoProducto/crear-tipo-producto/crear-tipo-producto.component';
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

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { MostrarClienteComponent } from './Components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './Components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './Components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './Components/cliente/eliminar-cliente/eliminar-cliente.component'

import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    MostrarTipoProductoComponent,
    CrearTipoProductoComponent,
    ActualizarTipoProductoComponent,
    EliminarTipoProductoComponent,
    MostrarProductosComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    MostrarVentasComponent,
    CrearVentaComponent,
    ActualizarVentaComponent,
    EliminarVentaComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
  ],

  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
