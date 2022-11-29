import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADE, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adm-table',
  templateUrl: './adm-table.component.html',
  styleUrls: ['./adm-table.component.scss']
})
export class AdmTableComponent implements OnInit {



  constructor(private usuarioApi: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { };
  @Input() url: string = '';
  @Input() tipo: string = '';
  @Input() withUrl: boolean = true;
  @Input() ADEList: ADE[] = [];
  urlTipo: string = '';
  @Output() ADE = new EventEmitter<ADE>();
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.urlTipo = (data as { urlTipo: string }).urlTipo;
    })
    if (this.withUrl) {
      this.usuarioApi.getAllADEs(this.url).subscribe(ADE => {
        this.ADEList = ADE;
      })
    }
  }
  setADE(ade: ADE) {
    this.ADE.emit(ade);
  }

  moveTo(ade: ADE): void {
    console.log(ade.num_u)
    this.router.navigate(['dashboard', this.urlTipo, ade.num_u], { relativeTo: this.activatedRoute.root })
  }
}
