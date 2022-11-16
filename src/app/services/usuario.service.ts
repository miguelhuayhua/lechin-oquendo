import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  }): void {
    let data = new FormData();
    data.append('nombre', usuario.nombre);
    data.append('apellido', usuario.apellido);
    this.api.post('url', data);
  }
}
