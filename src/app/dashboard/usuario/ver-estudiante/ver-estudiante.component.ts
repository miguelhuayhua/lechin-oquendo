import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { MateriaService } from 'src/app/services/materia.service';
import { Calificacion, Materia } from 'src/app/services/types/types';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.scss']
})
export class VerEstudianteComponent implements OnInit {

  estudiante: ADE = {

    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: ''
  }
  num_es: string = '';
  materias: Materia[] = [];
  f_nacimiento: string = '';
  calificacion: Calificacion = {
    e1parcial: 0,
    e2parcial: 0,
    e3parcial: 0,
    fecha_calificacion: '',
    finalizado: 0,
    nota_total: 0
  }
  docente: ADE = {
    ...this.estudiante
  }
  status: number = 1;
  constructor(private activeRouter: ActivatedRoute,
    private adeApi: UsuarioService,
    private materiaApi: MateriaService,
    private calificacionApi: CalificacionService) { }
  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      this.num_es = (params as { id: string }).id;
      this.adeApi.getADEById(this.num_es, 'http://localhost:5000/estudiante').subscribe(estudiante => {
        this.estudiante = estudiante;
        let date = new Date(estudiante.fecha_nac)
        this.f_nacimiento = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (date.getDate() + 1);
        this.materiaApi.getMateriasADE(this.num_es).subscribe(materias => {
          this.materias = materias;
        })
      })
    })
  }


  clickMateria(materia: Materia): void {
    this.calificacionApi.getCalificacionByEstudiante(this.num_es, materia.id_m!.toString()).subscribe(calificacion => {
      this.calificacion = (calificacion as Calificacion);
      this.materiaApi.getDocenteMateria(materia.id_m!.toString()).subscribe(docente => {
        this.docente = docente;
      })
    })

  }
}
