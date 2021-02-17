import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';

const url = 'http://localhost/backendphp/mensajes/'
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  insertarMensaje(mensaje:Mensaje): Observable<any>{
    return this.http.post(url, mensaje)
  }

  leerMensajes(): Observable<any>{
    return this.http.get(url)
  }

  borrarMensaje(id:number): Observable<any>{
    return this.http.delete(url+id)
  }
}
