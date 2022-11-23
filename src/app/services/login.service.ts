import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ADE, Usuario } from './usuario.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginPost(usuario: string, password: string): Observable<{ num_u: string, login_token: string } | { error: number }> {
    let formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('password', password);
    return this.http.post<{ num_u: string, login_token: string } | { error: number }>('http://localhost:5000/login', formData);
  }
  firstLogin(token: string): Observable<ADE | { error: number }> {
    let formData = new FormData();
    formData.append('token', token);
    return this.http.post<ADE | { error: number }>('http://localhost:5000/first_login', formData);
  }

  confirmUserData(num_u: string): Observable<Usuario> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    return this.http.post<Usuario>('http://localhost:5000/confirm_user', formData);
  }
  changeFirstUser(num_u: string, new_user: string, new_password: string, token_cea: string, usuario: string):
    Observable<{ status: number }> {
    let formData = new FormData();
    formData.append('num_u', num_u);
    formData.append('password', new_password);
    formData.append('new_user', new_user);
    formData.append('token_cea', token_cea);
    formData.append('usuario', usuario);
    return this.http.post<{ status: number }>('http://localhost:5000/changeFirstUser', formData);
  }
}


