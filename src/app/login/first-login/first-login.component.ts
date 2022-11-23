import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StoreService } from 'src/app/services/store.service';
import { ADE } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss']
})
export class FirstLoginComponent implements OnInit {
  ade: ADE = {
    apellidos: '',
    carnet: '',
    departamento: '',
    direccion: '',
    email: '',
    fecha_nac: '',
    genero: '',
    nombres: '',
    telf: '',
    num_u: ''
  }
  f_nac: Date = new Date();
  deps = ['LA PAZ', 'COCHABAMBA', 'SANTA CRUZ', 'ORURO', 'POTOSI', 'CHUQUISACA', 'TARIJA', 'PANDO', 'BENI'];
  constructor(
    private loginApi: LoginService,
    private activeRouter: ActivatedRoute,
    private store: StoreService,
    private route: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(data => {
      let token: string = (data as { token: string }).token;
      this.loginApi.firstLogin(token).subscribe(data => {
        if ((data as { error: number }).error == 1) {
          console.log('error')
        }
        else {
          this.ade = (data as ADE);
          this.f_nac = new Date(this.ade.fecha_nac);
        }
      })
    })
  }

  //handles
  handleClick(event: MouseEvent): void {
    event.preventDefault();
    this.loginApi.confirmUserData(this.ade.num_u!).subscribe(user => {
      this.store.setUsuario(user);
      this.store.setFastUserInfo({ nombres: this.ade.nombres, num_u: this.ade.num_u!, usuario: user.usuario })
      this.route.navigate(['usuario'], { relativeTo: this.activeRouter.parent });
    })
  }

}
