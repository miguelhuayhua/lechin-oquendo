import { Component, Input, OnInit } from '@angular/core';
import { ADE } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-docente-info',
  templateUrl: './docente-info.component.html',
  styleUrls: ['./docente-info.component.scss']
})
export class DocenteInfoComponent implements OnInit {

  constructor() { }
  @Input() f_nac: string = '';
  @Input() departamento: string = '';
  @Input() docente: ADE = {
    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: '',
  }
  ngOnInit(): void {
  }

}
