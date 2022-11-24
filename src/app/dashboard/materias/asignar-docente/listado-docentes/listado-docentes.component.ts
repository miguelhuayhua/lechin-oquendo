import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-docentes',
  templateUrl: './listado-docentes.component.html',
  styleUrls: ['./listado-docentes.component.scss']
})
export class ListadoDocentesComponent implements OnInit {
  @Output() docente = new EventEmitter<ADE>();
  constructor(
    private adeApi: UsuarioService) { }

  docentes: ADE[] = []
  ngOnInit(): void {
    this.adeApi.getAllADEs('http://localhost:5000/docentes').subscribe(docentes => {
      this.docentes = docentes;
    })
  }


  setDocente(docente: ADE): void {
    this.docente.emit(docente);
  }

}
