import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EstudianteService } from 'src/app/services/ade.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  //data
  roles: string = '';
  //user data
  usuario: string = "";
  token_cea: string = this.makeid();
  id: string = "";


  //url to post data
  url: string = '';
  tipo: number = 0;
  //constructor
  constructor(
    private activatedRouter: ActivatedRoute,
    private dialog: MatDialog,
    private api: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe(data => {
      let tipo = (data as { tipo: number }).tipo;
      if (tipo == 3) {
        this.url = 'http://localhost:5000/estudiante';
      }
      else if (tipo == 2) {
        this.url = 'http://localhost:5000/docente';
      }
      else {
        this.url = 'http://localhost:5000/administrativo';
      }
      this.tipo = tipo;
      this.activatedRouter.queryParams.subscribe(data => {
        this.id = (data as { id: string }).id;
        this.api.getADEById(this.id, this.url).subscribe(data => {
          this.usuario = data.nombres + "_" + data.carnet;
        })
      })
    })


  }
  //handle events
  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {
      this.api.createFirstUser({
        id_roles: this.roles,
        num_u: this.id,
        password: '',
        token_cea: this.token_cea,
        usuario: this.usuario,
      }, this.tipo).subscribe(data => {
        if (data.status == 1) {
          if (this.tipo == 3) {
            this.router.navigate(['dashboard', 'estudiante', 'asignar'], { relativeTo: this.activatedRouter.root, queryParams: { id: this.id } });
          }
          else if (this.tipo == 2) {
            this.router.navigate(['dashboard', 'docente', 'detalles'], { relativeTo: this.activatedRouter.root, queryParams: { id: this.id } });
          }
          else {
            this.router.navigate(['dashboard', 'administrativo', 'asignar'], { relativeTo: this.activatedRouter.root, queryParams: { id: this.id } });
          }
        }
        else {
          console.log('error')
        }

      })
    })
  }

  //methods 
  private makeid(): string {
    var result: string = '';
    var characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 25; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
