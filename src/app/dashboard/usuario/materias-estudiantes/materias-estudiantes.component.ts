import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/services/types/types';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { StoreService } from 'src/app/services/store.service';
import { EstudianteService } from 'src/app/services/ade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-materias-estudiantes',
  templateUrl: './materias-estudiantes.component.html',
  styleUrls: ['./materias-estudiantes.component.scss']
})
export class MateriasEstudiantesComponent implements OnInit {
  //data
  materias: Materia[] = []
  total: number = 0;
  id_delete: string | undefined = "";
  private num_es: string = "";
  //CONSTRUCTOR

  constructor(private dialog: MatDialog, private store: StoreService,
    private apiEstudiante: EstudianteService,
    private apiUsuario: UsuarioService,
    private activeRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe(data => {
      this.num_es = (data as { id: string }).id;

    })
  }
  //events
  verMateria(materia: Materia) {
    this.materias.push(materia)
    this.total = this.materias.reduce((acum, value) => {
      return acum + value.costo;
    }, 0);
  }

  handleDelete(event: MouseEvent) {
    let element: HTMLElement = (event.target as HTMLElement);
    element.tagName == 'BUTTON' ? this.id_delete = element.id : this.id_delete = element.parentElement?.id;
    let enableBtn: HTMLElement = document.getElementById(this.id_delete!)!;
    enableBtn.classList.remove('disableButton')
    this.materias = this.materias.filter(value => {
      return value.id_m != +this.id_delete!;
    })
    this.total = this.materias.reduce((acum, value) => {
      return acum + value.costo;
    }, 0);
    console.log('recorre todo')
  }

  //registrar todo 
  handleSubmit(event: Event) {
    event.preventDefault();
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(value => {
      this.apiEstudiante.getEstudiante(this.num_es).subscribe(estudiante => {
        console.log(estudiante)
        this.apiUsuario.getUsuarioById(this.num_es).subscribe(usuario => {
          this.store.setInfoNuevoUsuario(estudiante, {...usuario,num_u:this.num_es}, this.materias, this.total);
          this.router.navigate(['../confirmar'], { relativeTo: this.activeRouter })
        })
      })
    })

  }
}
