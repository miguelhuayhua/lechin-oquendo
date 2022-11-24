import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Materia } from './types/types';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  getAllMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>('http://localhost:5000/materias');
  }

  getMateriaById(id: number): Observable<Materia> {
    let formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post<Materia>('http://localhost:5000/materia', formData);
  }

  addMateria(materia: Materia): Observable<{ status:number} | Materia> {
    let formData = new FormData();
    formData.append('nombre', materia.nombre);
    formData.append('url', materia.url);
    formData.append('costo', materia.costo.toString());
    formData.append('descripcion', materia.descripcion);
    console.log(materia.f_inicio.toISOString())
    formData.append('f_inicio', materia.f_inicio.toISOString());
    formData.append('f_final', materia.f_final.toISOString());
    formData.append('duracion', materia.duracion.toString());
    formData.append('hora_inicio', materia.hora_inicio);
    formData.append('hora_salida', materia.hora_salida);
    return this.http.post<{status:number} |Materia>('http://localhost:5000/add_materia',formData);
  }
}
