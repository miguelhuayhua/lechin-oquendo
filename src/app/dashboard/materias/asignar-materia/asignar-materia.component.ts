import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() id_delete: string | undefined = "";

  showProgressBar: boolean = true;
  //comportamiento
  disableButton: boolean = false;
  constructor(private apiMateria: MateriaService) { }

  ngOnInit(): void {
    this.apiMateria.getAllMaterias().subscribe(data => {
      this.materias = data;
      this.showProgressBar = false;
    })
  }
  //handles
  handleClick(event: MouseEvent): void {
    let button: HTMLButtonElement = (event.target as HTMLButtonElement);
    let id_materia: string = button.id;
    let m: Materia | undefined = this.materias.find((value) => {
      return value.id_m == +id_materia;
    })
    button.classList.add('disableButton')
    this.materia.emit(m)
  }
}
