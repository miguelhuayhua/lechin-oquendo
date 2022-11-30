import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/ade.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { Carrera } from 'src/app/services/types/types';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.component.html',
  styleUrls: ['./detalle-docente.component.scss']
})
export class DetalleDocenteComponent implements OnInit {

  constructor(private apiAde: UsuarioService,
    private activeRoute: ActivatedRoute,
    private carreraApi: CarreraService,
    private adeApi: EstudianteService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  ade: ADE = {
    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: ''
  };
  tipo: string = '';
  antiguedad: string = '';
  id_carrera: string = '';
  curriculum = '';
  carreras: Carrera[] = []
  fecha: string = '';
  num_u: string = '';
  url: string = '';
  id: number = 0;
  nombreDepartamento: string[] = ['LA PAZ', 'COCHABAMBA', 'SANTA CRUZ', 'ORURO', 'POTOSI', 'CHUQUISACA', 'TARIJA', 'PANDO', 'BENI'];

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = (data as { tipo: string }).tipo;
      this.id = (data as { id: number }).id;
      if (this.id == 2) {
        this.url = 'http://localhost:5000/docente';
      }
      else if (this.id == 1) {

        this.url = 'http://localhost:5000/administrativo';
      }
    })
    this.carreraApi.getAllCarreras().subscribe(carreras => {
      this.carreras = carreras;
      this.activeRoute.queryParams.subscribe(data => {
        this.num_u = (data as { id: string }).id;
        this.apiAde.getADEById(this.num_u, this.url).subscribe(ade => {
          this.ade = ade;
          let fecha = new Date(this.ade.fecha_nac);
          this.fecha = fecha.getDate() + '/' + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        })
      })
    })

  }

  //handle submit
  handleSubmit(event: Event): void {
    event.preventDefault();
    this.adeApi.updateADEDetalle(this.num_u, this.antiguedad, this.id_carrera, this.id).subscribe(res => {
      if (res.status == 1) {
        this.router.navigate(['../'], { relativeTo: this.activeRoute, replaceUrl: true })

      }
      else {
        this.snackBar.open('Ha ocurrido un error inesperado', 'OK')
      }
    })

  }


}
