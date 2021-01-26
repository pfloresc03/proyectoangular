import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: String="Pablo Flores Castellano"
  mes: String="NOVIEMBRE"
  texto: String="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ['a','ante','bajo','cabe','con','contra','de','desde']
  dni: number = 0
  usuarios =[
    {nombre: "Pablo", apellido:"Flores", edad:21},
    {nombre: "Javier", apellido:"Bueno", edad:35},
    {nombre: "Manuel", apellido:"Palomino", edad:20}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
