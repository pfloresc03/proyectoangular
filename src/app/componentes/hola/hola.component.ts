import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {
  nombre: String
  apellido: String
  constructor(private miruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.miruta.snapshot.paramMap.get("nombre")
    this.apellido = this.miruta.snapshot.paramMap.get("apellido")
  }

}
