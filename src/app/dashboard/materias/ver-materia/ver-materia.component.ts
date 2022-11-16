import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-materia',
  templateUrl: './ver-materia.component.html',
  styleUrls: ['./ver-materia.component.scss']
})
export class VerMateriaComponent implements OnInit {
  materia: Materia = {
    id: '',
    title: '',
    banner: '',
    costo: 0,
    descripcion: '',
    estado: 0,
    grado: '1',
    semestre: ''
  };
  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(data => {
      this.materia.id = (data as { id: string }).id;
    })
  }

}

interface Materia {
  title: string,
  costo: number,
  grado: string,
  descripcion: string,
  estado: number,
  id: string,
  banner: string,
  semestre: string
}
