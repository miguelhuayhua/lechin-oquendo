import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  tipo: string = '';

  month: number = new Date().getMonth();
  year: number = 2000;
  day: number = 1;
  //DATA
  nombre: string = "";
  apellidos: string = "";
  celular: string = "";
  correo: string = "";
  genero: string = "";
  ci_nit: string = "";
  ciudad: string = "";
  direccion: string = "";

  //HINTS
  showPhoneError1: boolean = false;
  showEmailError: boolean = false;
  showCiError: boolean = false;

  showProgressBar: boolean = false;
  //INPUTS
  handleInputPhone(e: Event): void {
    isNaN(+((e as InputEvent).target as HTMLInputElement).value) ?
      this.showPhoneError1 = true :
      this.showPhoneError1 = false;
  }



  handleInputCi(e: Event): void {
    isNaN(+((e as InputEvent).target as HTMLInputElement).value) ?
      this.showCiError = true :
      this.showCiError = false;
  }
  handleInputEmail(e: Event): void {
    let value: string = ((e as InputEvent).target as HTMLInputElement).value;
    value.includes('@') && value.includes('.') ?
      this.showEmailError = false :
      this.showEmailError = true;
  }

  //constructor
  constructor(private activeRoute: ActivatedRoute,
    private userApi: UsuarioService,
    public dialog: MatDialog,
    private router: Router) { }
  //send data using url
  private url: string = '';
  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = data['tipo'];
      if (+data['id'] == 3) {
        this.url = 'http://localhost:5000/add_estudiante';
      }
      else if (+data['id'] == 2) {
        this.url = 'http://localhost:5000/add_docente';
      }
      else {
        this.url = 'http://localhost:5000/add_administrativo';
      }
    })
    //manejo de eventos
  }
  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {
      this.showProgressBar = true;
      this.userApi.addADE({
        nombres: this.nombre,
        apellidos: this.apellidos,
        telf: this.celular,
        carnet: this.ci_nit,
        departamento: this.ciudad,
        email: this.correo,
        fecha_nac: this.year + '/' + (this.month + 1) + '/' + this.day,
        genero: this.genero,
        direccion: this.direccion
      }, this.url).subscribe(response => {
        this.showProgressBar = false;
        this.router.navigate(['usuario'], {
          queryParams: { id: response.id }
          ,
          relativeTo: this.activeRoute.parent,
        })
      })
    })
  }
  //handle selects
  handleSelectDay(day: number) {
    this.day = day;
  }
  handleSelectMonth(month: number) {
    this.month = month;
  }
  handleSelectYear(year: number) {
    this.year = year;
  }
}
