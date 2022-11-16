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
    celular: string,
    correo: string,
    genero: string,
    ci: string,
    ciudad: string,
    f_nacimiento: Date
  }): Observable<{ id_usuario: string }> {
    let data = new FormData();
    data.append('nombre', usuario.nombre);
    data.append('apellido', usuario.apellido);
    return this.api.post<{ id_usuario: string }>('url', data);
  }
}
