import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioEstudiante } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiante(num_es: string): Observable<UsuarioEstudiante> {
    let data = new FormData();
    data.append('num_es', num_es);
    return this.http.post<UsuarioEstudiante>('http://localhost:5000/estudiante', data);
  }
}
