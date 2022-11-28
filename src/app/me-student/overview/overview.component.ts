import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/services/types/types';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  
})
export class OverviewComponent implements OnInit {

  materia: Materia = {
    costo: 0,
    descripcion: '',
    duracion: 0,
    f_final: new Date(),
    f_inicio: new Date(),
    hora_inicio: '',
    hora_salida: '',
    nombre: '',
    url: ''
  }
  constructor() { }

  ngOnInit(): void {
  }


  //set materia info
  addMateria(event: Materia): void {
    console.log(event)
    this.materia = {...event}
  }
}
