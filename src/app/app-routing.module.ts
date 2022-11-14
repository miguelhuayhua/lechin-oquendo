import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MeComponent } from './usuario/me/me.component';
import { UserHistoryComponent } from './usuario/me/user-history/user-history.component';
import { UserInfoActionsComponent } from './usuario/me/user-info-actions/user-info-actions.component';
import { UserInfoComponent } from './usuario/me/user-info/user-info.component';
import { UserLogsComponent } from './usuario/me/user-logs/user-logs.component';
import { UserActionsComponent } from './usuario/ver-estudiantes-acciones/user-actions/user-actions.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarComponent } from './usuario/agregar/agregar.component';
import { VerEstudiantesAccionesComponent } from './usuario/ver-estudiantes-acciones/ver-estudiantes-acciones.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'me',
        component: MeComponent,
        children: [
          {
            path: 'detalles',
            component: UserInfoComponent,
          },
          {
            path: 'logs',
            component: UserLogsComponent
          },
          {
            path: 'acciones',
            component: UserHistoryComponent
          }
          ,
          {
            path: '',
            redirectTo: 'detalles',
            pathMatch: 'full'
          }
        ]
      }, {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'estudiante',
    component: UsuarioComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
        data: { tipo: 'estudiante' }
      },
      {
        path: '',
        component: VerEstudiantesAccionesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
