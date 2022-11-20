import { Injectable } from '@angular/core';
import { Materia } from './types/usuarios';
import { Usuario, ADE } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private infoNuevoUsuario: { estudiante: ADE, usuario: Usuario, materias: Materia[], total: number } = {
    materias: [],
    total: 0,
    estudiante: { apellidos: 'Huayhua Condori', carnet: '', departamento: '', direccion: '', email: '', fecha_nac: '', genero: '', nombres: '', telf: '' },
    usuario: { id_roles: '', num_u: '', password: '', token_cea: '', usuario: '' }
  }
  constructor() { }

  setInfoNuevoUsuario(estudiante: ADE, usuario: Usuario, materias: Materia[], total: number): void {
    this.infoNuevoUsuario.materias = materias;
    this.infoNuevoUsuario.total = total;
    this.infoNuevoUsuario.usuario = usuario;
    this.infoNuevoUsuario.estudiante = estudiante;
  }
  getInfoNuevoUsuario(): { estudiante: ADE, materias: Materia[], total: number, usuario: Usuario } {
    return this.infoNuevoUsuario;
  }
}
