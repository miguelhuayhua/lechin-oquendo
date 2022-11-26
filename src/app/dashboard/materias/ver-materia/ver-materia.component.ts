import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';
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
  hora_ent: string = '';
  min_ent: string = '';
  hora_sal: string = '';
  min_sal: string = '';
  f_ent: Date = new Date();
  f_sal: Date = new Date();
  constructor(private currentRoute: ActivatedRoute,
    private apiMateria: MateriaService) { }

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
        console.log(materia)
      })
    })
  }

}

