import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa: any
  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([39.50046962683785, -2.8692669669800024], 13)
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    })
    trozos.addTo(this.mapa)
    L.marker([39.50046962683785, -2.8692669669800024]).addTo(this.mapa)
  }

}
