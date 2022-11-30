import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RouterInfoService } from 'src/app/services/router-info.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent implements OnInit {
  showUserOptions: boolean = false;
  //data info
  dashInfo: string = '';
  rutas: { route: string, fullPath: string }[] = [];

  usuario: Usuario = {
    num_u: '',
    password: '',
    token_cea: '',
    usuario: ''
  }
  constructor(private router: Router, private routerInfo: RouterInfoService,
    private userApi: UsuarioService,
    private cookies: CookieService,
    private activatedRouter: ActivatedRoute) {
    router.events.subscribe(data => {
      let url: string = (data as RouterEvent).url
      if (url != undefined) {
        let full: string = '';
        this.dashInfo = url;
        url = url.split('?')[0];
        this.rutas = url.split('/').map(((value, i) => {
          full = full + '/' + value
          if (i < url.split('/').length - 1) {
            value = value + " / "
          }
          return { route: value, fullPath: full.substring(1, full.length) }
        }))
        this.rutas = this.rutas.slice(1, this.rutas.length)
      }
    })
  }

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
  handleMouseEnter(event: MouseEvent): void {
    this.showUserOptions = true;
  }
  handleMouseLeave(event: MouseEvent): void {
    this.showUserOptions = false;
  }
  handleClickButton(event: any): void {
    this.showUserOptions = !this.showUserOptions;
  }
}
