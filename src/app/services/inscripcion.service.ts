import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from './types/types';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private http: HttpClient) { }


  addNuevoRegistro(num_es: string , total: number): Observable<{ status: number ,id_i?:number}> {
    let formData = new FormData();
    console.log(num_es,total)
    formData.append('num_es', num_es);
    formData.append('costo_total', total.toString());
    return this.http.post<{ status: number,id_i?:number }>('http://localhost:5000/createInscripcion', formData)
  }

  addDetalleRegistro(id_i:number, materias:Materia[]): Observable<{ status: number }> {
    
    return this.http.post<{ status: number }>('http://localhost:5000/createDetalleInscripcion',
     {id_i,materias})

  }
  
}
