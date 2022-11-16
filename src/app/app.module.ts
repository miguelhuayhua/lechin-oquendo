import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
import { UsuarioComponent } from './dashboard/usuario/usuario.component';

import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MeComponent } from './dashboard/usuario/me/me.component';
import { UserInfoActionsComponent } from './dashboard/usuario/me/user-info-actions/user-info-actions.component';
import { UserInfoComponent } from './dashboard/usuario/me/user-info/user-info.component';
import { UserHistoryComponent } from './dashboard/usuario/me/user-history/user-history.component';
import { UserLogsComponent } from './dashboard/usuario/me/user-logs/user-logs.component';
import { VerEstudiantesAccionesComponent } from './dashboard/usuario/ver-estudiantes-acciones/ver-estudiantes-acciones.component';
import { AgregarComponent } from './dashboard/usuario/agregar/agregar.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { VerDocentesAccionesComponent } from './dashboard/usuario/ver-docentes-acciones/ver-docentes-acciones.component';
import { StudentActionsComponent } from './dashboard/usuario/ver-estudiantes-acciones/student-actions/student-actions.component';
import { StudentTableComponent } from './dashboard/usuario/ver-estudiantes-acciones/student-table/student-table.component';
import { TeacherActionsComponent } from './dashboard/usuario/ver-docentes-acciones/teacher-actions/teacher-actions.component';
import { TeacherTableComponent } from './dashboard/usuario/ver-docentes-acciones/teacher-table/teacher-table.component';
import { FooterComponent } from './dashboard/footer/footer.component';

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
    MeComponent,
    UserInfoActionsComponent,
    UserInfoComponent,
    UserHistoryComponent,
    UserLogsComponent,
    VerEstudiantesAccionesComponent,
    AgregarComponent,
    MainDashboardComponent,
    VerDocentesAccionesComponent,
    StudentActionsComponent,
    StudentTableComponent,
    TeacherActionsComponent,
    TeacherTableComponent,
    FooterComponent,
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
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    HammerModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
