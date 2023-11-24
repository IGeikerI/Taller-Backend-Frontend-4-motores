import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios cliente/cliente.service';
import { Cliente } from '../../model/cliente';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css']
})
export class MostrarClienteComponent {
  public clientes: Cliente[] = []
  public displayedColumns: string[] = ["id", " nombreCliente ", "direccionCliente", " telefonoCliente", "correoCliente ", "passwordCliente"]
  constructor(
    private ClienteService: ClienteService,
    private router: Router,
    private MessageService: MessageService,
  ) { }
  ngOnInit(): void {
    this.mostrarCliente();
  }

  mostrarCliente() {
    this.ClienteService.getAllCliente()
      .subscribe((clientes: Cliente[]) => {
        this.clientes = clientes;
        console.log(this.clientes);
      });
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/clientes');
    this.ClienteService.deleteCliente(id).subscribe(
      () => {
        this.MessageService.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
        this.mostrarCliente();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/clientes');

      }
    );
  }

  imprimir(id: number){

  }




}
