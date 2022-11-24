import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  constructor(private http: HttpClient) { }


  getTurnos(): Observable<Turno[]> {
    return this.http.get<Turno[]>('http://localhost:5000/turnos');
  }
}
