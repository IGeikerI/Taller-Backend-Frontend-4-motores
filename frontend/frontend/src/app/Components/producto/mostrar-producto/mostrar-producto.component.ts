import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Components/model/producto';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios productos/productos.service';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductosComponent implements OnInit {
  public productos: Producto[]=[]
  public displayedColumns: string[] = ["id", " nombre", "marca", " precio", "stockmin", "cantidad", "tipoproducto"]
  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarProductos();
  }

mostrarProductos(){
  this.productosService.getAllProducto()
      .subscribe((product: Producto[]) => {
        this.productos = product;
        console.log(this.productos);
      });
}
}
