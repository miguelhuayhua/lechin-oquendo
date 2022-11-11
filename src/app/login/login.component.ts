import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  password: string = "";
  constructor(private loginApi: LoginService) { }

  ngOnInit(): void {
  }


  //events
  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.loginApi.loginPost({ username: this.usuario, password: this.password })
  }
}
