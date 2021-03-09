import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-editar-roles',
  templateUrl: './editar-roles.component.html',
  styleUrls: ['./editar-roles.component.css']
})
export class EditarRolesComponent implements OnInit {
  usuarios: any
  roles: any
  constructor(private servicioAdmin:AdminService) { }

  ngOnInit(): void {
    this.listarUsers()
    this.obtenerRoles()
  }

  listarUsers(): void{
    this.servicioAdmin.obtenerUsers().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuarios = respuesta
      }, 
      error => {
        console.log(error)
      }
    )
  }

  obtenerRoles(): void{
    this.servicioAdmin.obtenerRoles().subscribe(
      respuesta => {
        console.log(respuesta)
        this.roles = respuesta
      },
      error => {
        console.log(error)
      }
    )
  }

  editarRol(idUsuario: number, rolSeleccionado: number): void{
    let datosActualizados = {id: idUsuario, rolNuevo: rolSeleccionado}
    this.servicioAdmin.editarRol(datosActualizados).subscribe(
      respuesta => {
        console.log(respuesta)
        this.listarUsers()
      },
      error => {
        console.log(error)
      }
    )
  }
}
