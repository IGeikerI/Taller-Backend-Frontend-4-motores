import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/Components/model/tipoproducto';
import { Router } from '@angular/router';
import { TipoProductoService } from 'src/app/servicios tipo productos/tipoproductos.service';

@Component({
  selector: 'app-mostrar-tipo-productos',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css']
})
export class MostrarTipoProductoComponent implements OnInit {
  public tproductos: TipoProducto[] = []
  public displayedColumns: string[] = ["id", "nombre"]
  constructor(
    private productoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.mostrarTipoProducto();
  }
  
  mostrarTipoProducto() {
    this.productoService.getAllTipoProducto()
      .subscribe((productos: TipoProducto[]) => {
        this.tproductos = productos;
        console.log(this.tproductos);
      });
  }


}