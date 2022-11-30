import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent implements OnInit, OnChanges {

  dashboardActivo: boolean = false;
  maestrosActivo: boolean = false;
  constructor(
  ) {
    this.dashboardActivo, this.maestrosActivo = false;
  }

  showAdmOptions: boolean = false;
  @Input() usuario: Usuario = {
    num_u: '',
    password: '',
    token_cea: '',
    usuario: ''
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.usuario.tipo! == '0') {
      this.showAdmOptions = true;
    }
  }

}
