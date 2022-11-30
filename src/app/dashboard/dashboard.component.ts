import { Component, OnInit, } from '@angular/core';
import { Event, RouterEvent, Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RouterInfoService } from '../services/router-info.service';
import { StoreService } from '../services/store.service';
import { Usuario, UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userApi: UsuarioService,
    private cookies: CookieService,
    private activatedRouter: ActivatedRoute,
    private store: StoreService,
    private router: Router) {
  }
  usuario: Usuario = {
    num_u: '',
    password: '',
    token_cea: '',
    usuario: ''
  };
  ngOnInit(): void {
    if (this.cookies.get('key')! == undefined) {
      this.router.navigate(['/'], { relativeTo: this.activatedRouter.root })
    }
    else {
      this.userApi.getUsuarioByAccessToken(this.cookies.get('key')!).subscribe(usuario => {
        this.usuario = usuario;
      })
    }
  }

}
