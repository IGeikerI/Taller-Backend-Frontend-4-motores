import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Components/model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/clientes/`
  constructor(
    private http:HttpClient
  ) { }

  getAllCliente(){
    return this.http
    .get<Cliente[]>(this.base_path)
  }
  getOneCliente():Observable<{cliente:Cliente[]}>{
    return this.http
      .get<{cliente:Cliente[]}>(this.base_path)
  }

  createCliente(data: any):Observable<Cliente>{
    return this.http.post<Cliente>(this.base_path, data)
  }

  updateCliente(id: number, data: any): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.base_path}/${id}`, data);
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.base_path}${id}/`);
  }

}