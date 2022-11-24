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
    id_semestre: 0,
    nombre: '',
    duracion: 0,
    hora_inicio: '',
    hora_salida: '',
  };
  constructor(private currentRoute: ActivatedRoute,
    private apiMateria: MateriaService) { }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(data => {
      this.id = +(data as { id: string }).id;
      this.apiMateria.getMateriaById(this.id).subscribe(materia => {
        this.materia = materia;
      })
    })
  }

}

