import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  showPhoneError1: boolean = false;
  showEmailError: boolean = false;
  ade: ADE = {
    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: ''
  }
  showProgressBar: boolean = false;
  //INPUTS
  handleInputPhone(e: Event): void {
    isNaN(+((e as InputEvent).target as HTMLInputElement).value) ?
      this.showPhoneError1 = true :
      this.showPhoneError1 = false;
  }

  handleInputEmail(e: Event): void {
    let value: string = ((e as InputEvent).target as HTMLInputElement).value;
    value.includes('@') && value.includes('.') ?
      this.showEmailError = false :
      this.showEmailError = true;
  }
  constructor(private cookie: CookieService,
    private userApi: UsuarioService) { }

  ngOnInit(): void {
    if (this.cookie.get('key') != undefined) {
      this.userApi.getUsuarioByAccessToken(this.cookie.get('key')!).subscribe(usuario => {
        this.userApi.getADEById(usuario.num_u, 'http://localhost:5000/administrativo').subscribe(adm => {
          this.ade = adm;

        })
      })
    }
  }

}
