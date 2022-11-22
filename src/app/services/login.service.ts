import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADE } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginPost(data: { username: string, password: string }): void {

    let formData = new FormData();
    formData.append('usuario', data.username);
    formData.append('password', data.password)
    this.http.post('https://lechin.herokuapp.com/cierre_session', formData).subscribe(res => {
      console.log("se envió")
    })
  }
  firstLogin(token: string): Observable<ADE | { error: number }> {
    let formData = new FormData();
    formData.append('token', token);
    return this.http.post<ADE | { error: number }>('http://localhost:5000/first_login', formData);
  }
}

