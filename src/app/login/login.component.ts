import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  password: string = "";
  hide: boolean = true;
  constructor(
    private loginApi: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }


  //events
  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.loginApi.loginPost(this.usuario, this.password).subscribe(res => {
      if ((res as ({ error: number })).error != 1) {
        let dataRes = (res as ({ num_u: string, login_token: string, tipo: number }))
        let expireDate = new Date();
        expireDate.setHours(new Date().getHours() + 2);
        this.cookieService.put('key', dataRes.login_token, { expires: expireDate, sameSite: 'strict', path: '/' })
        if (dataRes.tipo == 3) {
          this.router.navigate(['../me'], { relativeTo: this.activatedRouter });
        }
        else if (dataRes.tipo == 2) {
          this.router.navigate(['../teaching'], { relativeTo: this.activatedRouter });
        }
        else {
          this.router.navigate(['../dashboard'], { relativeTo: this.activatedRouter });
        }
      }
    })
  }
}
