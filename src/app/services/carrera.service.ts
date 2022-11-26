import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrera } from './types/types';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  getAllCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>('http://localhost:5000/carreras');
  }
}
