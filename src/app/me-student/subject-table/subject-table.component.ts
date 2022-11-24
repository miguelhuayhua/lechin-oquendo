import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';
@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  materias: Materia[] = []
  constructor(private materiaApi: MateriaService) { }

  ngOnInit(): void {
    this.materiaApi.getAllMaterias().subscribe(materias => {
      this.materias = materias;
    })
  }

  setMateria(materia:Materia){
    console.log(materia)
  }

}
