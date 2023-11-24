import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios productos/productos.service';
import {Message,MessageService} from 'primeng/api';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  public form:FormGroup=this.formBuilder.group({
    nombre :['', [Validators.required]],
    marca:['', [Validators.required]],
    precio:['', [Validators.required]],
    stockmin:['', [Validators.required]],
    cantidad:['', [Validators.required]],
    tipoproducto:['', [Validators.required]],
  })
  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductosService, 
    private MessageService :MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: Producto = this.form.value;
    console.log(formValue);
    this.productoService.createProducto(formValue).subscribe(
      () => {
        setTimeout(()=>{                  
          this.MessageService.add({severity:'success', summary: 'Notificación', detail: 'Producto creado', life:5000});

     }, 0);
        this.router.navigateByUrl('productos');
      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    )
  }
  cancel() {
    this.router.navigateByUrl('/clientes');
  }
  get nombre () {return this.form.get('nombre');}
  get marca () {return this.form.get('marca');}
  get precio () {return this.form.get('precio');}
  get stockmin () {return this.form.get('stockmin');}
  get cantidad () {return this.form.get('cantidad');}
  get tipoproducto () {return this.form.get('tipoproducto');}

}
