import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuickCardsComponent } from './dashboard/quick-cards/quick-cards.component';
import { DashNavbarComponent } from './dashboard/dash-navbar/dash-navbar.component';
import { LeftNavbarComponent } from './dashboard/left-navbar/left-navbar.component';
import { LineChartHomeComponent } from './dashboard/line-chart-home/line-chart-home.component';
import { BarChartHomeComponent } from './dashboard/bar-chart-home/bar-chart-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './dashboard/static-components/table/table.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UserTableComponent } from './usuario/ver-estudiantes-acciones/user-table/user-table.component';
import { UserActionsComponent } from './usuario/ver-estudiantes-acciones/user-actions/user-actions.component';
import { MeComponent } from './usuario/me/me.component';
import { UserInfoActionsComponent } from './usuario/me/user-info-actions/user-info-actions.component';
import { UserInfoComponent } from './usuario/me/user-info/user-info.component';
import { UserHistoryComponent } from './usuario/me/user-history/user-history.component';
import { UserLogsComponent } from './usuario/me/user-logs/user-logs.component';
import { VerEstudiantesAccionesComponent } from './usuario/ver-estudiantes-acciones/ver-estudiantes-acciones.component';
import { AgregarComponent } from './usuario/agregar/agregar.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuickCardsComponent,
    DashNavbarComponent,
    LeftNavbarComponent,
    LineChartHomeComponent,
    BarChartHomeComponent,
    LoginComponent,
    TableComponent,
    UsuarioComponent,
    UserTableComponent,
    UserActionsComponent,
    MeComponent,
    UserInfoActionsComponent,
    UserInfoComponent,
    UserHistoryComponent,
    UserLogsComponent,
    VerEstudiantesAccionesComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
