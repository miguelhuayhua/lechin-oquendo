import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.scss']
})
export class SubjectInfoComponent implements OnInit, OnChanges {


  //inputs
  @Input() materia: Materia = {
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
  f_inicio: Date = new Date(this.materia.f_inicio);
  f_final: Date = new Date(this.materia.f_final);
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.f_inicio, this.materia.f_inicio);
    this.f_inicio = new Date(this.materia.f_inicio)
  }

}
