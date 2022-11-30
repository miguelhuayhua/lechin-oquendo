import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/types';
@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  @Input() materias: Materia[] = [];
  @Input() withDataSource: boolean = false;
  constructor(private materiaApi: MateriaService) { }
  @Output() materia = new EventEmitter<Materia>();
  ngOnInit(): void {
    if (!this.withDataSource) {
      this.materiaApi.getAllMaterias().subscribe(materias => {
        this.materias = materias;
      })
    }
  }

  setMateria(materia: Materia) {
    this.materia.emit(materia);
  }

}
