import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { StoreService } from 'src/app/services/store.service';
import { Materia } from 'src/app/services/types/types';

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
  constructor(private materiaApi: MateriaService,
    private store: StoreService,
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activedRouter.data.subscribe(data => {
      this.action = (data as { action: string }).action;
    })
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
