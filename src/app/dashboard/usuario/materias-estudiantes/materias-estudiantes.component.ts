import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/services/types/usuarios';

@Component({
  selector: 'app-materias-estudiantes',
  templateUrl: './materias-estudiantes.component.html',
  styleUrls: ['./materias-estudiantes.component.scss']
})
export class MateriasEstudiantesComponent implements OnInit {
  //data
  materias: Materia[] = []
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  //events
  verMateria(materia: Materia) {
    this.materias.push(materia);
    this.total = this.materias.reduce((acum, value) => {
      return acum + value.costo;
    }, 0)
  }
}
