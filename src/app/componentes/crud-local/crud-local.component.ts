import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {
  notanueva: Nota = new Nota()
  notas: Nota[]=[]
  indice: number
  notaSeleccionada: Nota = new Nota()
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('crudLocal')!=null){
      this.notas = JSON.parse(localStorage.getItem('crudLocal'))
      this.indice = this.notas[this.notas.length-1].id +1
    } else {this.indice=0}
  }

  insertarNota(): void {
    this.notanueva.id = this.indice
    this.indice++
    this.notas.push(this.notanueva)
    this.notanueva = new Nota
    localStorage.setItem('crudLocal', JSON.stringify(this.notas))
  }

  editarNota(notaEntrada: Nota): void {
    for (let i in this.notas){
      if (this.notas[i].id == notaEntrada.id){
        this.notas[i] = notaEntrada
        this.notaSeleccionada = new Nota()
        localStorage.setItem('crudLocal', JSON.stringify(this.notas))
      }
    }
  }

  borrarNota(notaEntrada: Nota): void {
    if (confirm("Seguro que quiere eliminar la nota " + notaEntrada.titulo)){
      for (let i in this.notas){
        if (this.notas[i].id == notaEntrada.id){
          this.notas.splice(parseInt(i),1)
          this.notaSeleccionada = new Nota()
          localStorage.setItem('crudLocal', JSON.stringify(this.notas))
        }
      }
    }
  }
}
