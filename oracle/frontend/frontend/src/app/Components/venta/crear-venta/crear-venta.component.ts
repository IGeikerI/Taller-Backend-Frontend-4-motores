import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { VentasService } from 'src/app/servicios ventas/ventas.service';
import { Venta } from '../../model/venta';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent {

public form:FormGroup=this.formBuilder.group({
  fecha:['', [Validators.required]],
  descuento:['', [Validators.required]],
  total:['', [Validators.required]],
  subtotal:['', [Validators.required]],
  updated:['', [Validators.required]],
  cliente:['', [Validators.required]],

})
constructor(
  private formBuilder: FormBuilder,
  private ventasService: VentasService, 
  private MessageService :MessageService,


  private router: Router,
) { }

ngOnInit(): void {

}

onSubmit (): void {
  const formValue: Venta= this.form.value;
  console.log(formValue);
  this.ventasService.createVenta(formValue).subscribe(
    ()=> {
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
get cliente () {return this.form.get('cliente');}
get fecha () {return this.form.get('fecha');}
get descuento () {return this.form.get('descuento');}
get total () {return this.form.get('total');}
get subtotal () {return this.form.get('subtotal');}
get updated () {return this.form.get('updated');}



}
