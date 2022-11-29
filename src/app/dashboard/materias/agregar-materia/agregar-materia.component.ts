import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { StoreService } from 'src/app/services/store.service';
import { Materia } from 'src/app/services/types/types';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.scss']
})
export class AgregarMateriaComponent implements OnInit, OnChanges {

  //extra data
  hours: string[] = Array.from(Array(15).keys()).map(hour => hour + 7 < 10 ? '0' + (hour + 7) : (hour + 7).toString());
  minutes: string[] = Array.from(Array(60).keys()).map(minute => minute < 10 ? '0' + minute : minute.toString())
  //data
  @Input() nombre: string = '';
  @Input() duracion: string = '';
  @Input() url: string = 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png';
  @Input() costo: string = '';
  @Input() semestre: string = '';
  @Input() descripcion: string = '';
  @Input() f_inicio: Date = new Date();
  @Input() f_conclusion: Date = new Date();
  @Input() hora_entrada: string = '07';
  @Input() minuto_inicio: string = '00';
  @Input() hora_salida: string = '07';
  @Input() minuto_salida: string = '00';
  @Input() id_m: number = 0;
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  action: string = '';
  @Input() f_ini: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  @Input() f_fin: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  constructor(private materiaApi: MateriaService,
    private store: StoreService,
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.activedRouter.data.subscribe(data => {
      this.action = (data as { action: string }).action;
      this.f_ini = { dia: (this.f_inicio.getDate() + 1) + "", mes: (this.f_inicio.getMonth() ) + "", year: this.f_inicio.getFullYear() + "" }
      this.f_fin = { dia: (this.f_conclusion.getDate() + 1) + "", mes: (this.f_conclusion.getMonth() ) + "", year: this.f_conclusion.getFullYear() + "" }

    })
  }
  //handle f_inicio date time
  handleDayChange(day: number) {
    this.f_inicio.setDate(day);
    this.f_ini = { ...this.f_ini, dia: (day).toString() }

  }
  handleMonthChange(month: number) {
    this.f_inicio.setMonth(month);
    this.f_ini = { ...this.f_ini, mes: (month).toString() }

  }
  handleYearChange(year: number) {
    this.f_inicio.setFullYear(year);
    this.f_ini = { ...this.f_ini, year: year.toString() }
  }
  //handle f_conclusion date time
  handleDayChange2(day: number) {
    this.f_conclusion.setDate(day);
    this.f_fin = { ...this.f_fin, dia: day.toString() }

  }
  handleMonthChange2(month: number) {
    this.f_conclusion.setMonth(month);
    this.f_fin = { ...this.f_fin, mes: (month).toString() }

  }
  handleYearChange2(year: number) {
    this.f_conclusion.setFullYear(year);
    this.f_fin = { ...this.f_fin, year: year.toString() }
  }

  handleSubmit(): void {
    if (this.action == 'ACTUALIZAR') {
      this.materiaApi.updateMateria({
        costo: +this.costo,
        descripcion: this.descripcion,
        duracion: +this.duracion,
        f_final: this.f_conclusion,
        f_inicio: this.f_inicio,
        hora_inicio: this.hora_entrada + ":" + this.minuto_inicio,
        hora_salida: this.hora_salida + ":" + this.minuto_salida,
        nombre: this.nombre,
        url: this.url,
        id_m: this.id_m
      }).subscribe(res => {
        console.log(res.status)
      })
    }
    else if (this.action == 'AGREGAR') {
      this.materiaApi.addMateria({
        costo: +this.costo,
        descripcion: this.descripcion,
        duracion: +this.duracion,
        f_final: this.f_conclusion,
        f_inicio: this.f_inicio,
        hora_inicio: this.hora_entrada + ":" + this.minuto_inicio,
        hora_salida: this.hora_salida + ":" + this.minuto_salida,
        nombre: this.nombre,
        url: this.url
      }).subscribe(data => {
        this.store.setMateria((data as Materia));
        this.router.navigate(['../asignar'], { relativeTo: this.activedRouter })
      })
    }
  }
}
