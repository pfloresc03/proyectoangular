import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
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
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
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
      },
      error => console.log(error)
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
}
