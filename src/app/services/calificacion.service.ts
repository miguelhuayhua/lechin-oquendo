import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calificacion } from './types/types';
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http: HttpClient) { }

  getCalificacionByEstudiante(num_es: string, id_m: string): Observable<Calificacion | { status: number }> {
    let formData = new FormData();
    formData.append('num_u', num_es);
    formData.append('id_m', id_m);
    return this.http.post<Calificacion | { status: number }>('http://localhost:5000/getNotasEstudiante', formData);
  }
}
