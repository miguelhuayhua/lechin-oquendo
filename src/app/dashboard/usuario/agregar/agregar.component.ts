import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  tipo: string = '';

  //date
  date: { year: number, months: { index: number, month: string, days: number[] }[] }[] = []
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  monthDays: number[][] = [
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(28).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1),
    Array.from(Array(30).keys()).map(val => val + 1),
    Array.from(Array(31).keys()).map(val => val + 1)]

  days: number[] | undefined = Array.from(Array(31).keys()).map(val => val + 1);
  month: number = 0;
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

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = data['tipo'];
    })
    let veintenueve = Array.from(Array(29).keys()).map(val => val + 1);
    let years = Array.from(Array(90).keys()).map(val => val + 1930);
    let biyear = 1932;
    this.date = years.map(value => {
      if (value == biyear) {
        biyear = value + 4;
        return {
          year: value, months: this.months.map((month, index) => {
            if (index == 1)
              return { index, month, days: veintenueve }
            else
              return { index, month, days: this.monthDays[index] }

          })
        }
      }
      else {
        return {
          year: value, months: this.months.map((month, index) => {
            return { index, month, days: this.monthDays[index] }
          })
        }
      }
    })
  }

  //manejo de eventos
  handleSelect(event: MatSelectChange): void {
    this.days = this.date.find((date => {
      return date.year == event.value && date.months[this.month].index == this.month;
    }))?.months[this.month].days;
    this.year = event.value;
  }
  handleSelectMonth(event: MatSelectChange): void {
    this.days = this.date.find((date => {
      return date.year == this.year && date.months[event.value].index == event.value;
    }))?.months[this.month].days;
    this.month = event.value;
  }
  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    let date = new Date(this.year, this.month, this.day);

    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {
      this.showProgressBar = true;
      this.userApi.addUsuarioEstudiante({
        nombres: this.nombre,
        apellidos: this.apellidos,
        telf: this.celular,
        carnet: this.ci_nit,
        departamento: this.ciudad,
        email: this.correo,
        fecha_nac: this.year + '/' + this.month + '/' + this.day,
        genero: this.genero,
        direccion: this.direccion
      }).subscribe(data => {
        this.showProgressBar = false;
        this.router.navigate(['usuario'], {
          queryParams: { id: data.id }
          ,
          relativeTo: this.activeRoute.parent,
        })
      })
    })
  }
}
