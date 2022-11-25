import { Component, OnInit } from '@angular/core';
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
    private router: Router) { }
  docente: ADE = {
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
  nombreDepartamento: string[] = ['LA PAZ', 'COCHABAMBA', 'SANTA CRUZ', 'ORURO', 'POTOSI', 'CHUQUISACA', 'TARIJA', 'PANDO', 'BENI'];

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = (data as { tipo: string }).tipo;
    })
    this.carreraApi.getAllCarreras().subscribe(carreras => {
      this.carreras = carreras;
      this.activeRoute.queryParams.subscribe(data => {
        let id: string = (data as { id: string }).id;
        this.apiAde.getADEById(id, 'http://localhost:5000/docente').subscribe(docente => {
          this.docente = docente;

          let fecha = new Date(this.docente.fecha_nac);
          this.fecha = fecha.getDate() + '/' + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        })
      })
    })

  }

  //handle submit
  handleSubmit(event: Event): void {
    event.preventDefault();
    this.adeApi.updateDocente(this.docente, this.antiguedad, this.id_carrera).subscribe(res => {
      if (res.status == 1) {
        this.router.navigate(['../'], { relativeTo: this.activeRoute, replaceUrl: true })

      }
    })

  }


}
