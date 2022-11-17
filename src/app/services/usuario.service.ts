import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private api: HttpClient) { }


  addUsuario(usuario: {
    nombre: string,
    apellido: string,
    direccion: string,
    correo: string,
    genero: string,
    ci: string,
    departamento: string,
    f_nacimiento: string,
    celular:string
  }): Observable<{ id_usuario: string }> {
    let data = new FormData();
    data.append('nombres', usuario.nombre);
    data.append('apellidos', usuario.apellido);
    data.append('carnet',usuario.ci);
    data.append('email',usuario.correo);
    data.append('fecha_nac',usuario.f_nacimiento);
    data.append('telf',usuario.celular);
    data.append('edad','22');
    data.append('genero',usuario.genero);
    data.append('direccion',usuario.direccion);
    data.append('departamento',usuario.departamento);
    return this.api.post<{ id_usuario: string }>('https://lechin.herokuapp.com/add_estudiante', data);
  }
}
