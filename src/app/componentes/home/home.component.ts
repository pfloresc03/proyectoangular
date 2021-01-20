import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: string= "texto de prueba"
  num1: number=0
  num2: number=0
  letras=["a","b","c"]
  usuarios=[
    {nombre:"Manolo", apellido:"López"},
    {nombre:"Pablo", apellido:"Flores"},
    {nombre:"Javier", apellido:"Bueno"},
    {nombre:"Manuel", apellido:"Palomino"}
  ]

  usuarioseleccionado: {nombre:"", apellido:""}
  seleccionUsuario(usuario):void{
    this.usuarioseleccionado = usuario
  }

  constructor() { }

  ngOnInit(): void {
  }

}
