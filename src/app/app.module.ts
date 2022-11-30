import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';


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
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
import { TeacherActionsComponent } from './dashboard/usuario/ver-docentes-acciones/teacher-actions/teacher-actions.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { MateriasComponent } from './dashboard/materias/materias.component';
import { InscripcionComponent } from './dashboard/inscripcion/inscripcion.component';
import { ListadoMateriasComponent } from './dashboard/materias/listado-materias/listado-materias.component';
import { AccionesMateriasComponent } from './dashboard/materias/acciones-materias/acciones-materias.component';
import { VerMateriaComponent } from './dashboard/materias/ver-materia/ver-materia.component';
import { AgregarMateriaComponent } from './dashboard/materias/agregar-materia/agregar-materia.component';
import { DialogComponent } from './dashboard/dialog/dialog.component';
import { TileChartComponent } from './dashboard/static-components/tile-chart/tile-chart.component';
import { PieChartComponent } from './dashboard/static-components/pie-chart/pie-chart.component';
import { CrearUsuarioComponent } from './dashboard/usuario/crear-usuario/crear-usuario.component';
import { AsignarMateriaComponent } from './dashboard/materias/asignar-materia/asignar-materia.component';
import { MateriasEstudiantesComponent } from './dashboard/usuario/materias-estudiantes/materias-estudiantes.component';
import { ConfirmarEstudianteComponent } from './dashboard/usuario/confirmar-estudiante/confirmar-estudiante.component';
import { DateComponent } from './dashboard/static-components/date/date.component';
import { DetalleDocenteComponent } from './dashboard/usuario/detalle-docente/detalle-docente.component';
import { HomeComponent } from './home/home.component';
import { VerDocenteComponent } from './dashboard/usuario/ver-docente/ver-docente.component';
import { VerEstudianteComponent } from './dashboard/usuario/ver-estudiante/ver-estudiante.component';
import { VerComponent } from './dashboard/usuario/ver/ver.component';
import { FirstLoginComponent } from './login/first-login/first-login.component';
import { AfterVerifyComponent } from './login/after-verify/after-verify.component';


import { CookieModule } from 'ngx-cookie';
import { TeachingComponent } from './teaching/teaching.component';
import { MeStudentComponent } from './me-student/me-student.component';
import { HeaderComponent } from './me-student/header/header.component';
import { SubjectTableComponent } from './me-student/subject-table/subject-table.component';
import { OverviewComponent } from './me-student/overview/overview.component';
import { SubjectInfoComponent } from './me-student/subject-info/subject-info.component';
import { AsignarDocenteComponent } from './dashboard/materias/asignar-docente/asignar-docente.component';
import { ListadoDocentesComponent } from './dashboard/materias/asignar-docente/listado-docentes/listado-docentes.component';
import { ContactComponent } from './contact/contact.component';
import { BarInfoComponent } from './me-student/charts/bar-info/bar-info.component';
import { VerAdministrativoAccionesComponent } from './dashboard/usuario/ver-administrativo-acciones/ver-administrativo-acciones.component';
import { AdmTableComponent } from './dashboard/usuario/ver-administrativo-acciones/adm-table/adm-table.component';
import { MateriaInfoComponent } from './dashboard/materias/materia-info/materia-info.component';
import { DocenteInfoComponent } from './dashboard/usuario/docente-info/docente-info.component';
import { VerAdministrativoComponent } from './dashboard/usuario/ver-administrativo/ver-administrativo.component';
import { SubjectGradeComponent } from './me-student/subject-grade/subject-grade.component';


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
    TeacherActionsComponent,
    FooterComponent,
    MateriasComponent,
    InscripcionComponent,
    ListadoMateriasComponent,
    AccionesMateriasComponent,
    VerMateriaComponent,
    AgregarMateriaComponent,
    DialogComponent,
    TileChartComponent,
    PieChartComponent,
    CrearUsuarioComponent,
    AsignarMateriaComponent,
    MateriasEstudiantesComponent,
    ConfirmarEstudianteComponent,
    DateComponent,
    DetalleDocenteComponent,
    HomeComponent,
    VerDocenteComponent,
    VerEstudianteComponent,
    VerComponent,
    FirstLoginComponent,
    AfterVerifyComponent,
    TeachingComponent,
    MeStudentComponent,
    HeaderComponent,
    SubjectTableComponent,
    OverviewComponent,
    SubjectInfoComponent,
    AsignarDocenteComponent,
    ListadoDocentesComponent,
    ContactComponent,
    BarInfoComponent,
    VerAdministrativoAccionesComponent,
    AdmTableComponent,
    MateriaInfoComponent,
    DocenteInfoComponent,
    VerAdministrativoComponent,
    SubjectGradeComponent,
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
    MatCardModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    HammerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    CookieModule.withOptions()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
