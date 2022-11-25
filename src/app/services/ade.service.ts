import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADE } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiante(num_es: string): Observable<ADE> {
    let data = new FormData();
    data.append('num_u', num_es);
    return this.http.post<ADE>('http://localhost:5000/estudiante', data);
  }


  updateDocente(docente: ADE, antiguedad: string, id_carrera: string): Observable<{ status: number }> {
    let formData = new FormData();
    formData.append('num_dd', docente.num_u!);
    formData.append('antiguedad', antiguedad);
    formData.append('id_carrera', id_carrera);
    return this.http.post<{ status: number }>('http://localhost:5000/updateDocente', formData);
  }
}
