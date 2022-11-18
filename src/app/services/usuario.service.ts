import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: HttpClient) { }


  addUsuario(estudiante: UsuarioEstudiante): Observable<{ iduser: string }> {
    let data = new FormData();
    data.append('nombres', estudiante.nombre);
    data.append('apellidos', estudiante.apellido);
    data.append('carnet', estudiante.ci);
    data.append('email', estudiante.correo);
    data.append('fecha_nac', estudiante.f_nacimiento);
    data.append('telf', estudiante.celular);
    data.append('edad', '22');
    data.append('genero', estudiante.genero);
    data.append('direccion', estudiante.direccion);
    data.append('departamento', estudiante.departamento);
    return this.api.post<{ iduser: string }>('https://lechin.herokuapp.com/add_estudiante', data);
  }

  createFirstUser(usuario: Usuario): Observable<{ status: boolean }> {
    let data = new FormData();
    data.append('num_u', usuario.num_u);
    data.append('usuario', usuario.usuario);
    data.append('password', usuario.password);
    data.append('token_cea', usuario.token_cea);
    data.append('id_roles', usuario.id_roles);
    return this.api.post<{ status: boolean }>('url', data);
  }
}

type UsuarioEstudiante = {
  nombre: string,
  apellido: string,
  direccion: string,
  correo: string,
  genero: string,
  ci: string,
  departamento: string,
  f_nacimiento: string,
  celular: string
}

type Usuario = {
  num_u: string,
  usuario: string,
  password: string,
  token_cea: string,
  id_roles: string
}