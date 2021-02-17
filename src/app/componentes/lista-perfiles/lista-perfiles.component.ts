import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/clases/mensaje';
import { User } from 'src/app/clases/user';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-lista-perfiles',
  templateUrl: './lista-perfiles.component.html',
  styleUrls: ['./lista-perfiles.component.css']
})
export class ListaPerfilesComponent implements OnInit {
  usuarioSel: User
  usuarios: User[]
  mensajeNuevo: Mensaje = new Mensaje
  mensaje: string
  
  constructor(private servicioUsuario:UserService, private servicioMensaje:MensajesService, private irHacia:Router) { }
  
  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(): void{
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta
      },
      error => {
        console.log(error)
      }
    )
  }

  crearMensaje(mensaje: Mensaje): void{
    mensaje.idDestinatario=this.usuarioSel.id
    this.servicioMensaje.insertarMensaje(mensaje).subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajeNuevo.mensaje = ""
        this.mensaje = respuesta
        
        setTimeout(()=>{this.mensaje=null},2000)
      }, 
      error => {
        console.log(error)
        this.mensaje = error.error.error
        setTimeout(()=>{this.mensaje=null},2000)
      }
    )
  }
}
