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


  updateDocente(num_u: string, antiguedad: string, id_carrera: string): Observable<{ status: number }> {
    let formData = new FormData();
    formData.append('num_dd', num_u);
    formData.append('antiguedad', antiguedad);
    formData.append('id_carrera', id_carrera);
    return this.http.post<{ status: number }>('http://localhost:5000/updateDocente', formData);
  }


  updateADE(id: number, ade: ADE): Observable<{ status: number }> {
    let data = new FormData();
    data.append('num_u', ade.num_u!);
    data.append('nombres', ade.nombres);
    data.append('apellidos', ade.apellidos);
    data.append('carnet', ade.carnet);
    data.append('email', ade.email);
    data.append('fecha_nac', ade.fecha_nac);
    data.append('telf', ade.telf);
    data.append('genero', ade.genero);
    data.append('direccion', ade.direccion);
    data.append('departamento', ade.departamento);
    data.append('tipo', id.toString())
    return this.http.post<{ status: number }>('http://localhost:5000/updateAde', data);
  }
}
