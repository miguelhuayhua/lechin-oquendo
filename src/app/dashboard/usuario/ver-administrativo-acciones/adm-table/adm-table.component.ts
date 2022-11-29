import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adm-table',
  templateUrl: './adm-table.component.html',
  styleUrls: ['./adm-table.component.scss']
})
export class AdmTableComponent implements OnInit {



  ADEList: ADE[] = [];
  constructor(private usuarioApi: UsuarioService) { };
  @Input() url: string = '';
  @Input() tipo: string = '';
  @Output() ADE = new EventEmitter<ADE>();
  ngOnInit(): void {
    this.usuarioApi.getAllADEs(this.url).subscribe(ADE => {
      this.ADEList = ADE;
    })
  }

  setADE(ade: ADE) {
    this.ADE.emit(ade);
  }


}
