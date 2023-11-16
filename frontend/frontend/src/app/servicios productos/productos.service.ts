import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Components/model/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/`
  constructor(
    private http:HttpClient
  ) { }

  getAllProducto(){
    return this.http
    .get<Producto[]>(this.base_path)
  }

  createProducto(data: any):Observable<Producto>{
    return this.http.post<Producto>(this.base_path, data)
  }

}