import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.scss']
})
export class AgregarMateriaComponent implements OnInit {

  //data
  @Input() nombre: string = '';
  @Input() duracion: string = '';
  @Input() url: string = '';
  @Input() costo: string = '';
  @Input() semestre: string = '';  
  
  constructor() { }

  ngOnInit(): void {
  }

}
