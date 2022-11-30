import { Component, OnInit, Input } from '@angular/core';
import { Calificacion } from 'src/app/services/types/types';

@Component({
  selector: 'app-subject-grade',
  templateUrl: './subject-grade.component.html',
  styleUrls: ['./subject-grade.component.scss']
})
export class SubjectGradeComponent implements OnInit {

  constructor() { }
  @Input() calificacion: Calificacion = {
    e1parcial: 0,
    e2parcial: 0,
    e3parcial: 0,
    fecha_calificacion: '',
    finalizado: 0,
    nota_total: 0
  }
  ngOnInit(): void {
  }

}
