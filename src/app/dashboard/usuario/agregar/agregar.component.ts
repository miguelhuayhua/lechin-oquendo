import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  tipo: string = '';

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
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = data['tipo'];
    })
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
