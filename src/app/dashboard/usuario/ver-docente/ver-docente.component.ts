import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-ver-docente',
  templateUrl: './ver-docente.component.html',
  styleUrls: ['./ver-docente.component.scss']
})
export class VerDocenteComponent implements OnInit {

  tipo: string = '';

  month: number = 0;
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
    private router: Router,
    private apiADE: UsuarioService) { }
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
    })
    this.activeRoute.paramMap.subscribe(data => {
      this.apiADE.getADEById(data.get('id')!, this.url).subscribe(data => {
        console.log(data)
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
        console.log(this.year, this.month, this.day)
      })
    })
  }

  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {
      this.showProgressBar = true;

    })
  }
}
