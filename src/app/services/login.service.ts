import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginPost(data: { username: string, password: string }): void {
    console.log(data)
    this.http.post('aca va la url', data).subscribe(res => {
      console.log("se envió")
    })
  }

}
