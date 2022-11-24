import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient) { }


  getTipos(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>('http://localhost:5000/tipos');
  }
}
