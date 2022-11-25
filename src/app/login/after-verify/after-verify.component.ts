import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StoreService } from 'src/app/services/store.service';
import { Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-after-verify',
  templateUrl: './after-verify.component.html',
  styleUrls: ['./after-verify.component.scss']
})
export class AfterVerifyComponent implements OnInit {

  usuario: Usuario = {
    num_u: '',
    password: '',
    token_cea: '',
    usuario: ''
  }
  hide = true;
  hide2: boolean = true;
  nombres: string = '';
  newUser: string = '';
  confirmPassword: string = '';
  private num_u: string = '';
  constructor(private store: StoreService,
    private loginApi: LoginService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.store.getUsuario();
    this.newUser = this.store.getFastUserInfo().usuario;
    this.nombres = this.store.getFastUserInfo().nombres;
    this.num_u = this.store.getFastUserInfo().num_u;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.loginApi.changeFirstUser(this.num_u, this.newUser, this.usuario.password, this.usuario.token_cea, this.usuario.usuario).subscribe(res => {
      if (res.status == 1) {
        this.router.navigate(['../../'], { relativeTo: this.activeRouter })
      }
    })

  }
}
