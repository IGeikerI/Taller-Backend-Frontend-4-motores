import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message,MessageService} from 'primeng/api';
import { TipoProductoService } from 'src/app/servicios tipo productos/tipoproductos.service';
import { TipoProducto } from '../../model/tipoproducto';


@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent {

  public form:FormGroup=this.formBuilder.group({
    nombre:['', [Validators.required]],

  })


  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoService, 
    private MessageService :MessageService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue:TipoProducto= this.form.value;
    console.log(formValue);
    this.tipoProductoService.createCliente(formValue).subscribe(
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
  get nombre () {return this.form.get ('nombre');}
}
