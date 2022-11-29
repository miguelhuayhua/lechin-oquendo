import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  addADE(ade: ADE, url: string): Observable<{ id: string }> {
    let data = new FormData();
    data.append('nombres', ade.nombres);
    data.append('apellidos', ade.apellidos);
    data.append('carnet', ade.carnet);
    data.append('email', ade.email);
    data.append('fecha_nac', ade.fecha_nac);
    data.append('telf', ade.telf);
    data.append('genero', ade.genero);
    data.append('direccion', ade.direccion);
    data.append('departamento', ade.departamento);
    return this.http.post<{ id: string }>(url, data);
  }

  createFirstUser(usuario: Usuario, tipo: number): Observable<{ status: number }> {
    let data = new FormData();
    data.append('num_u', usuario.num_u);
    data.append('usuario', usuario.usuario);
    data.append('password', usuario.password);
    data.append('token_cea', usuario.token_cea);
    data.append('tipo', tipo.toString());
    return this.http.post<{ status: number }>('http://localhost:5000/registro_usuario', data);
  }
  getUsuarioById(num_u: string): Observable<Usuario> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.http.post<Usuario>('http://localhost:5000/usuario', formData)
  }

  getADEById(num_u: string, url: string): Observable<ADE> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.http.post<ADE>(url, formData);
  }

  getAllADEs(url: string): Observable<ADE[]> {
    return this.http.get<ADE[]>(url);

  }

  getUsuarioByAccessToken(token: string): Observable<Usuario> {
    let formData = new FormData();
    formData.append('token', token);
    return this.http.post<Usuario>('http://localhost:5000/getUserToken', formData);
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
  edad?: number
}

export type Usuario = {
  num_u: string,
  usuario: string,
  password: string,
  token_cea: string,
  logged?: number,
  tipo?: string
}