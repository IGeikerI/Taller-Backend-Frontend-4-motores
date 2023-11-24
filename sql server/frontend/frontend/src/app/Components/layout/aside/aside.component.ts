import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/cliente',
        items: [

          {
            label : 'Crear Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink: '/crear-cliente'
          },
          {
            label: 'Actualizar Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink:'/actualizar-cliente'
          },
          {
            label: 'Mostrar Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink: '/mostrar-cliente'
         },
          {
            label: 'Eliminar Cliente',
            icon: 'pi pi-fw pi-users',
            routerLink:'/eliminar-cliente'
          },

        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/tipoProducto',
        items: [
          {
            label: 'Agregar un tipo de producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink:'/crear-tipo-producto'
          },
          {
            label: 'Actualizar Producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/actualizar-tipo-producto'
          },
          {
            label: 'Mostrar Producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: 'mostrar-tipo-producto'
         },
          {
            label: 'Eliminar Producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: 'eliminar-tipo-producto'
          },

        ]
      },

      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/producto',
        items: [
          {
            label: 'Agregar un producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/crear-producto'
          },
          {
            label: 'Actualizar Producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/actualizar-producto'
          },
          {
            label: 'Mostrar Productos',
            icon: 'pi pi-fw pi-qrcode',
            routerLink: '/mostrar-producto',
         },
          {
            label: 'Eliminar Producto',
            icon: 'pi pi-fw pi-qrcode',
            routerLink:'/eliminar-producto'
          },

        ]

      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Agregar una venta',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: '/crear-venta',
          },
          {
            label: 'Actualizar Venta',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink:'actualizar-venta'
          },
          {
            label: 'Mostrar Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink:'mostrar-venta'
         },
          {
            label: 'Eliminar Ventas',
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink:'eliminar-venta'
          },

        ]
      }

    ];
  }

}
