import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  tipo: string = '';

  //DATA
  nombre: string = "";
  //HINTS
  showPhoneError1: boolean = false;
  //INPUTS
  handleInput(e: Event): void {
    console.log(+((e as InputEvent).target as HTMLInputElement).value)
    isNaN(+((e as InputEvent).target as HTMLInputElement).value) ?
      this.showPhoneError1 = true :
      this.showPhoneError1 = false;

  }
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(data => {
      this.tipo = data['tipo'];
    })
  }
}
