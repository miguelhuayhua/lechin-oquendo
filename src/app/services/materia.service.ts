import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Materia } from './types/usuarios';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  getAllMaterias():Observable<Materia[]>{
    return this.http.get<Materia[]>('http://localhost:5000/materias');
  }
}
