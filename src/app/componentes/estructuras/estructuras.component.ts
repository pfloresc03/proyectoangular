import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  verdad: boolean = false
  edad: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  muestraLog(indice,impar,primero,ultimo,cuenta){
    console.log(indice)
    console.log(impar)
    console.log(primero)
    console.log(ultimo)
    console.log(cuenta)
  }
}
