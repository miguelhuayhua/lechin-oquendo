import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteService } from 'src/app/services/ade.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogComponent } from '../../dialog/dialog.component';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  tipo: string = '';

  month: number = new Date().getMonth();
  year: number = 2000;
  day: number = 1;
  //DATA
  nombres: string = "";
  apellidos: string = "";
  celular: number = 0;
  correo: string = "";
  genero: string = "";
  ci_nit: string = "";
  ciudad: number = 0;
  direccion: string = "";
  num_u: string = "";
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
    public dialog: MatDialog,
    private apiADE: UsuarioService,
    private apiAde: EstudianteService,
    private snackBar: MatSnackBar) { }


  //send data using url
  private url: string = '';
  private id_tipo: number = 1;
  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = (data as { tipo: string }).tipo;
      this.id_tipo = (data as { id: number }).id;
      if (this.id_tipo == 3)
        this.url = 'http://localhost:5000/estudiante';
      else if (this.id_tipo == 2)
        this.url = 'http://localhost:5000/docente';
      else
        this.url = 'http://localhost:5000/administrativo';

      this.activeRoute.paramMap.subscribe(data => {
        this.num_u = data.get('id')!;
        this.apiADE.getADEById(this.num_u, this.url).subscribe(data => {
          this.nombres = data.nombres;
          this.apellidos = data.apellidos;
          this.celular = +data.telf;
          this.ci_nit = data.carnet;
          this.genero = data.genero;
          this.correo = data.email;
          this.ciudad = +data.departamento;
          this.direccion = data.direccion;
          this.year = new Date(data.fecha_nac).getFullYear();
          this.month = new Date(data.fecha_nac).getMonth();
          this.day = new Date(data.fecha_nac).getDate() + 1;
        })
      })
    })

  }

  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {
      this.showProgressBar = true;
      this.apiAde.updateADE(this.id_tipo, {
        apellidos: this.apellidos,
        carnet: this.ci_nit,
        departamento: this.ciudad.toString(),
        direccion: this.direccion,
        email: this.correo,
        fecha_nac: this.year + '/' + (this.month + 1) + '/' + this.day,
        genero: this.genero, nombres: this.nombres, telf: this.celular.toString(),
        num_u: this.num_u
      }).subscribe(res => {
        if (res.status == 1) {
          this.showProgressBar = false;
          this.snackBar.open(`${this.tipo} Actualizado`, 'OK', { duration: 4000 });
          this.apiADE.getADEById(this.num_u, this.url).subscribe(data => {

          })

        }
      })
    })
  }
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
