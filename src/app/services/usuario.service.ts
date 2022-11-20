import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: HttpClient) { }


  addADE(eda: ADE, url: string): Observable<{ id: string }> {
    let data = new FormData();
    data.append('nombres', eda.nombres);
    data.append('apellidos', eda.apellidos);
    data.append('carnet', eda.carnet);
    data.append('email', eda.email);
    data.append('fecha_nac', eda.fecha_nac);
    data.append('telf', eda.telf);
    data.append('genero', eda.genero);
    data.append('direccion', eda.direccion);
    data.append('departamento', eda.departamento);
    return this.api.post<{ id: string }>(url, data);
  }

  createFirstUser(usuario: Usuario, tipo: number): Observable<{ status: number }> {
    let data = new FormData();
    data.append('num_u', usuario.num_u);
    data.append('usuario', usuario.usuario);
    data.append('password', usuario.password);
    data.append('token_cea', usuario.token_cea);
    data.append('tipo', tipo.toString());
    return this.api.post<{ status: number }>('http://localhost:5000/registro_usuario', data);
  }
  getUsuarioById(num_u: string): Observable<Usuario> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.api.post<Usuario>('http://localhost:5000/usuario', formData)
  }

  getADEById(num_u: string, url: string): Observable<ADE> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.api.post<ADE>(url, formData);
  }

  getAllADEs(url: string): Observable<ADE[]> {
    return this.api.get<ADE[]>(url);

  }
}


export type ADE = {
  nombres: string,
  apellidos: string,
  direccion: string,
  email: string,
  genero: string,
  carnet: string,
  departamento: string,
  fecha_nac: string,
  telf: string,
  num_u?: string,
  disponible?: number,

}

export type Usuario = {
  num_u: string,
  usuario: string,
  password: string,
  token_cea: string,
  id_roles: string
}