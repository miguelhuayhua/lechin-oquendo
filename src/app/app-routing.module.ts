import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [{
  path: '', component: AppComponent,
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'usuario',
  component: UsuarioComponent
},
{
  path: 'estudiante',
  component: EstudianteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
