import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MateriaService } from 'src/app/services/materia.service';
import { Materia } from 'src/app/services/types/usuarios';

@Component({
  selector: 'app-asignar-materia',
  templateUrl: './asignar-materia.component.html',
  styleUrls: ['./asignar-materia.component.scss']
})
export class AsignarMateriaComponent implements OnInit {
  //data
  materias: Materia[] = [];
  @Output() materia = new EventEmitter<Materia>();

  //comportamiento
  disableButton: boolean = false;
  constructor(private apiMateria: MateriaService) { }

  ngOnInit(): void {
    this.apiMateria.getAllMaterias().subscribe(data => {
      this.materias = data;
    })
  }
  //handles
  handleClick(event: MouseEvent): void {
    let button:HTMLButtonElement = (event.target as HTMLButtonElement);
    let id_materia: string = button.id;

    let m: Materia | undefined = this.materias.find((value) => {
      return value.id_m == +id_materia;
    })
    button.classList.add('disableButton')
    this.materia.emit(m)

  }
}
