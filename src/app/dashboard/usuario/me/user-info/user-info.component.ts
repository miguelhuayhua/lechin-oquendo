import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private cookie: CookieService,
    private userApi: UsuarioService) { }

  ngOnInit(): void {
    if (this.cookie.get('key') != undefined) {
      this.userApi.getUsuarioByAccessToken(this.cookie.get('key')!).subscribe(usuario => {
        this.userApi.getADEById(usuario.num_u, 'http://localhost:5000/administrativo').subscribe(adm => {
          console.log(adm)

        })
      })
    }
  }

}
