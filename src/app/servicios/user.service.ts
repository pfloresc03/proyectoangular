import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../clases/user';
const url ='http://localhost:3000/user/'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registrar(usuario:User): Observable<any>{
    return this.http.post(url, usuario)
  }

  guardarToken(token:string): void {
    localStorage.setItem('userToken', token)
  }

  acceso(usuario:User): Observable<any>{
    return this.http.post(url+'login',usuario)
  }
}

