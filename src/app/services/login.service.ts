import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

}
