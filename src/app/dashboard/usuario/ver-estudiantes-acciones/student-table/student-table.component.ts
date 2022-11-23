import { Component, OnInit } from '@angular/core';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  public displayProgressBar: boolean = false;

  public estudiantes: ADE[] = []
  constructor(private apiUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.apiUsuario.getAllADEs('http://localhost:5000/estudiantes').subscribe(data => {
      this.estudiantes = data;
      this.displayProgressBar = true;
    })
  }

}
