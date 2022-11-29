import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Materia } from 'src/app/services/types/types';

@Component({
  selector: 'app-materia-info',
  templateUrl: './materia-info.component.html',
  styleUrls: ['./materia-info.component.scss']
})
export class MateriaInfoComponent implements OnInit, OnChanges {
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

  @Input() f_inicio: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  @Input() f_final: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  constructor() { }
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
