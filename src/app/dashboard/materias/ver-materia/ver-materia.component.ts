import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-ver-materia',
  templateUrl: './ver-materia.component.html',
  styleUrls: ['./ver-materia.component.scss']
})
export class VerMateriaComponent implements OnInit {
  id: number = 0;
  materia: Materia = {
    url: '',
    costo: 0,
    descripcion: '',
    f_inicio: new Date(),
    f_final: new Date(),
    id_m: 0,
    nombre: '',
    duracion: 0,
    hora_inicio: '',
    hora_salida: '',
  };

  //docente
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
  }

  //lista de estudiantes 
  ADEList: ADE[] = [];

  //datos para las fechas
  hora_ent: string = '';
  min_ent: string = '';
  hora_sal: string = '';
  min_sal: string = '';
  f_ent: Date = new Date();
  f_sal: Date = new Date();

  f_ini: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  f_fin: { dia: string, mes: string, year: string } = { dia: '', mes: '', year: '' };
  constructor(private currentRoute: ActivatedRoute,
    private apiMateria: MateriaService,
    private apiUsuario: UsuarioService) {
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(data => {
      this.id = +(data as { id: string }).id;
      this.apiMateria.getMateriaById(this.id).subscribe(materia => {
        this.materia = materia;
        this.hora_ent = this.materia.hora_inicio.split(":")[0];
        this.min_ent = this.materia.hora_inicio.split(":")[1];
        this.hora_sal = this.materia.hora_salida.split(":")[0];
        this.min_sal = this.materia.hora_salida.split(":")[1];
        this.f_ent = new Date(this.materia.f_inicio)
        this.f_sal = new Date(this.materia.f_final);
        this.f_fin = { dia: this.f_sal.getDate().toString(), mes: this.f_sal.getMonth().toString(), year: this.f_sal.getFullYear().toString() }
        this.f_ini = { dia: this.f_ent.getDate().toString(), mes: this.f_ent.getMonth().toString(), year: this.f_ent.getFullYear().toString() }
        this.apiUsuario.getADEById(this.materia.num_do!, 'http://localhost:5000/docente').subscribe(res => {
          this.docente = res;
        })
        this.apiMateria.getEstudiantesMateria(this.materia.id_m!).subscribe(res => {
          this.ADEList = res;
        })
      })
    })
  }
}

