import { Component, OnInit } from '@angular/core';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent implements OnInit {
  displayProgressBar: boolean = false;
  docentes: ADE[] = [];
  constructor(private apiADE: UsuarioService) { }

  ngOnInit(): void {
    this.apiADE.getAllADEs('http://localhost:5000/docentes').subscribe(docentes => {
      this.docentes = docentes;
      this.displayProgressBar = true;
    })
  }

}
