import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/clases/mensaje';
import { User } from 'src/app/clases/user';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: User = {}
  mostrarEditar: boolean = false
  mostrarEliminar: boolean = false
  borrarEmail: string = ""
  borrarPassword: string = ""
  formPerfil= this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    password: [''],
    email: ['', [Validators.required, Validators.email]],
    telefono: [undefined, [telefonoValido()]]

  })
  formImagen = this.fb.group({
    imagen: ['', [Validators.required]]
  })
  mensajes: Mensaje[]=[]
  mensaje: string
  repro: boolean = false
  audio = new Audio();
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router, private servicioMensaje:MensajesService) { }

  ngOnInit(): void {
    this.cargarPerfil()
    this.obtenerMensajes()
  }

  cargarPerfil(): void{
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
        this.formPerfil.patchValue(respuesta)
      },
      error => console.log(error)
    )
  }

  editarPerfil(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe (
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
        this.mensaje=respuesta
        setTimeout(()=>{this.mensaje=null},2000)
      },
      error =>{
        console.log(error)
        this.mensaje=error.error.error
        setTimeout(()=>{this.mensaje=null},2000)
      } 
    )
    
  }

  eliminarUsuario(): void {
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logout()
        this.irHacia.navigate(['/login'])
      },
      error => console.log(error)
    )
  }

  cambiaImagen(evento): void{
    if (evento.target.files){
      this.formImagen.get('imagen').setValue(evento.target.files[0])
    }
  }

  subirImagen(): void {
    const formData = new FormData()
    formData.append('imagen', this.formImagen.get('imagen').value)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {console.log(error)}
    )
  }

  foto: File
  tengoFoto(evento): void{
    if (evento.target.files){
      this.foto = evento.target.files[0]
    }
  }

  subirFoto(): void{
    const formData = new FormData()
    formData.append('imagen', this.foto)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {console.log(error)}
    )
  }

  obtenerMensajes(): void{
    this.servicioMensaje.leerMensajes().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajes=respuesta
      },
      error => {
        console.log(error)
      }
    )
  }

  eliminarMensaje(id: number): void{
    this.servicioMensaje.borrarMensaje(id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerMensajes()
        this.mensaje=respuesta
        setTimeout(()=>{this.mensaje=null},2000)
      },
      error => {
        console.log(error)
        this.mensaje=error.error.error
        setTimeout(()=>{this.mensaje=null},2000)
      }
    )
  }
  playAudio(){
    
    this.audio.src = "../../../assets/EspañaRemix.mp3";
    this.audio.load();
    this.audio.play();
    this.repro = true;
  }
  stopAudio(){
    
    this.audio.pause();
    this.repro = false;
  }
}
