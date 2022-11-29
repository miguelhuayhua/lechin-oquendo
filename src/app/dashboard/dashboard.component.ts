import { Component, OnInit, } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RouterInfoService } from '../services/router-info.service';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cookie: CookieService,
    private usuarioApi: UsuarioService) {

  }

  ngOnInit(): void {
    console.log(this.cookie.getAll())
    this.usuarioApi.getUsuarioByAccessToken(this.cookie.get('key')!).subscribe(data => {
      console.log(data)
    })
  }

}
