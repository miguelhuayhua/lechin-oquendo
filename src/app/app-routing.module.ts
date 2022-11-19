import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MeComponent } from './dashboard/usuario/me/me.component';
import { UserHistoryComponent } from './dashboard/usuario/me/user-history/user-history.component';
import { UserInfoComponent } from './dashboard/usuario/me/user-info/user-info.component';
import { UserLogsComponent } from './dashboard/usuario/me/user-logs/user-logs.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';
import { AgregarComponent } from './dashboard/usuario/agregar/agregar.component';
import { VerEstudiantesAccionesComponent } from './dashboard/usuario/ver-estudiantes-acciones/ver-estudiantes-acciones.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { VerDocentesAccionesComponent } from './dashboard/usuario/ver-docentes-acciones/ver-docentes-acciones.component';
import { MateriasComponent } from './dashboard/materias/materias.component';
import { InscripcionComponent } from './dashboard/inscripcion/inscripcion.component';
import { ListadoMateriasComponent } from './dashboard/materias/listado-materias/listado-materias.component';
import { AgregarMateriaComponent } from './dashboard/materias/agregar-materia/agregar-materia.component';
import { VerMateriaComponent } from './dashboard/materias/ver-materia/ver-materia.component';
import { CrearUsuarioComponent } from './dashboard/usuario/crear-usuario/crear-usuario.component';
import { AsignarMateriaComponent } from './dashboard/materias/asignar-materia/asignar-materia.component';
import { MateriasEstudiantesComponent } from './dashboard/usuario/materias-estudiantes/materias-estudiantes.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
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
        path: 'estudiante',
        component: UsuarioComponent,
        children: [
          {
            path: 'agregar',
            component: AgregarComponent,
            data: { tipo: 'estudiante' }
          },
          {
            path: 'usuario',
            component: CrearUsuarioComponent,
            data: { tipo: 3}
          },
          {
            path: 'asignar',
            component: MateriasEstudiantesComponent
          },
          {
            path: '',
            component: VerEstudiantesAccionesComponent,
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'docente',
        component: UsuarioComponent,
        children: [
          {
            path: 'agregar',
            component: AgregarComponent,
            data: { tipo: 'docente' }
          },
          {
            path: '',
            component: VerDocentesAccionesComponent,
            pathMatch: 'full'
          },
          {
            path: 'usuario',
            component: CrearUsuarioComponent
          }
        ]
      },
      {
        path: 'materias',
        component: MateriasComponent,
        children: [

          {
            path: 'agregar',
            component: AgregarMateriaComponent
          },
          {
            path: ':id',
            component: VerMateriaComponent
          },
          {
            path: '',
            component: ListadoMateriasComponent
          }
        ]
      },
      {
        path: 'inscripcion',
        component: InscripcionComponent
      }
      ,
      {
        path: 'overview',
        component: MainDashboardComponent,
      }
      , {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
