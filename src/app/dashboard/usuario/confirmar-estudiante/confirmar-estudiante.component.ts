import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Materia } from 'src/app/services/types/usuarios';
import { Usuario, ADE } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-confirmar-estudiante',
  templateUrl: './confirmar-estudiante.component.html',
  styleUrls: ['./confirmar-estudiante.component.scss']
})
export class ConfirmarEstudianteComponent implements OnInit {

  constructor(private store: StoreService) { }
  //data
  nombreDepartamento: string[] = ['LA PAZ', 'COCHABAMBA', 'SANTA CRUZ', 'ORURO', 'POTOSI', 'CHUQUISACA', 'TARIJA', 'PANDO', 'BENI'];
  nEstudiante: {
    estudiante: ADE,
    materias: Materia[],
    total: number,
    usuario: Usuario
  } = {
      materias: [], total: 0, estudiante: { apellidos: '', carnet: '', departamento: '', direccion: '', email: '', fecha_nac: '', genero: '', nombres: '', telf: '' },
      usuario: { id_roles: '', num_u: '', password: '', token_cea: '', usuario: '' }
    }
  ngOnInit(): void {
    this.nEstudiante = this.store.getInfoNuevoUsuario();
  }

}
