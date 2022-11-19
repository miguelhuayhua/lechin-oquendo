import { Component, OnInit, Input } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/usuarios';
@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.scss']
})
export class ListadoMateriasComponent implements OnInit {

  materias: Materia[] = []
  constructor(private apiMateria: MateriaService) { }

  ngOnInit(): void {
    this.apiMateria.getAllMaterias().subscribe(data => {
      this.materias = data;
    })
  }

}
