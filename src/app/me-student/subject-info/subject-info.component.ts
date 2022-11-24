import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.scss']
})
export class SubjectInfoComponent implements OnInit {

  materias: Materia[] = []
  constructor(private materiaApi: MateriaService) { }

  ngOnInit(): void {
    this.materiaApi.getAllMaterias().subscribe(materias => {
      this.materias = materias;
    })
  }

}
