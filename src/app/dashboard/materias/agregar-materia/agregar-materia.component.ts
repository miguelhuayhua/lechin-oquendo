import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.scss']
})
export class AgregarMateriaComponent implements OnInit {

  //extra data
  hours: string[] = Array.from(Array(15).keys()).map(hour => hour + 7 < 10 ? '0' + (hour + 7) : (hour + 7).toString());
  minutes: string[] = Array.from(Array(60).keys()).map(minute => minute < 10 ? '0' + minute : minute.toString())
  //data
  @Input() nombre: string = '';
  @Input() duracion: string = '';
  @Input() url: string = 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png';
  @Input() costo: string = '';
  @Input() semestre: string = '';
  @Input() f_inicio: Date = new Date();
  @Input() f_conclusion: Date = new Date();
  hora_inicio: string = '07';
  minuto_inicio: string = '00';
  hora_salida: string = '07';
  minuto_salida: string = '00';
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  constructor() { }

  ngOnInit(): void {
  }
  //handle f_inicio date time
  handleDayChange(day: number) {
    this.f_inicio.setDate(day);
  }
  handleMonthChange(month: number) {
    this.f_inicio.setMonth(month);
  }
  handleYearChange(year: number) {
    this.f_inicio.setFullYear(year);
  }
  //handle f_conclusion date time
  handleDayChange2(day: number) {
    this.f_conclusion.setDate(day);
  }
  handleMonthChange2(month: number) {
    this.f_conclusion.setMonth(month);
  }
  handleYearChange2(year: number) {
    this.f_conclusion.setFullYear(year);
  }
}
