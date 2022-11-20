import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: HttpClient) { }


  addUsuarioEstudiante(estudiante: UsuarioEstudiante): Observable<{ id: string }> {
    let data = new FormData();
    data.append('nombres', estudiante.nombres);
    data.append('apellidos', estudiante.apellidos);
    data.append('carnet', estudiante.carnet);
    data.append('email', estudiante.email);
    data.append('fecha_nac', estudiante.fecha_nac);
    data.append('telf', estudiante.telf);
    data.append('edad', '22');
    data.append('genero', estudiante.genero);
    data.append('direccion', estudiante.direccion);
    data.append('departamento', estudiante.departamento);
    return this.api.post<{ id: string }>('http://localhost:5000/add_estudiante', data);
  }

  createFirstUser(usuario: Usuario): Observable<{ status: number }> {
    let data = new FormData();
    data.append('num_u', usuario.num_u);
    data.append('usuario', usuario.usuario);
    data.append('password', usuario.password);
    data.append('token_cea', usuario.token_cea);
    return this.api.post<{ status: number }>('http://localhost:5000/registro_estudiante', data);
  }

  getUsuarioById(num_u: string): Observable<Usuario> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.api.post<Usuario>('http://localhost:5000/usuario', formData)
  }
}

export type UsuarioEstudiante = {
  nombres: string,
  apellidos: string,
  direccion: string,
  email: string,
  genero: string,
  carnet: string,
  departamento: string,
  fecha_nac: string,
  telf: string
}

export type Usuario = {
  num_u: string,
  usuario: string,
  password: string,
  token_cea: string,
  id_roles: string
}