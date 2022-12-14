import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Materia } from 'src/app/services/types/types';
import { ADE } from 'src/app/services/usuario.service';

import { TipoService } from 'src/app/services/tipo.service';
import { TurnoService } from 'src/app/services/turno.service';
import { Tipo, Turno } from 'src/app/services/types/types';
import { MateriaService } from 'src/app/services/materia.service';
@Component({
  selector: 'app-asignar-docente',
  templateUrl: './asignar-docente.component.html',
  styleUrls: ['./asignar-docente.component.scss']
})
export class AsignarDocenteComponent implements OnInit {

  constructor(private store: StoreService,
    private tipoApi: TipoService,
    private turnoApi: TurnoService,
    private materiaApi: MateriaService) { }
  materia: Materia = {
    costo: 0,
    descripcion: '',
    duracion: 0,
    f_final: new Date(),
    f_inicio: new Date(),
    hora_inicio: '',
    hora_salida: '',
    nombre: '',
    url: '',
    id_m: 0
  }
  docente: ADE = {
    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: '',
    num_u: ''
  }
  turno: number = 0;
  tipo: number = 0;
  fecha: string = '';
  nombreDepartamento: string[] = ['LA PAZ', 'COCHABAMBA', 'SANTA CRUZ', 'ORURO', 'POTOSI', 'CHUQUISACA', 'TARIJA', 'PANDO', 'BENI'];
  tipos: Tipo[] = [];
  turnos: Turno[] = [];
  ngOnInit(): void {
    this.materia = this.store.getMateria();
    this.tipoApi.getTipos().subscribe(tipos => {
      this.tipos = tipos;
      this.turnoApi.getTurnos().subscribe(turnos => {
        this.turnos = turnos;
      })
    })
  }
  chooseDocente(docente: ADE) {
    this.docente = docente;
    let fecha = new Date(this.docente.fecha_nac);
    this.fecha = fecha.getDate() + '/' + fecha.getMonth() + "/" + fecha.getFullYear();
  }

  handleLanzarCurso(): void {
    console.log('click')
    this.materiaApi.lauchMateria(this.docente.num_u!, this.tipo, this.turno, this.materia.id_m!).subscribe(res => {
      console.log(res)
    })
  }
}
