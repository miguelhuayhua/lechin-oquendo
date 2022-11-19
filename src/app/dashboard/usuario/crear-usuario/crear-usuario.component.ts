import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
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

  //constructor
  constructor(
    private activatedRouter: ActivatedRoute,
    private dialog: MatDialog,
    private api: UsuarioService,
    private apiEstudiante: EstudianteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(data => {
      this.id = (data as { id: string }).id;
      this.apiEstudiante.getEstudiante(this.id).subscribe(data => {
        this.usuario = data.apellidos + "_" + data.carnet;
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
        usuario: this.usuario
      }).subscribe(data => {
        if (data.status == 1) {
          this.activatedRouter.data.subscribe(data => {
            let tipo: number = (data as { tipo: number }).tipo;
            console.log(tipo)
            if (tipo == 3) {
              this.router.navigate(['dashboard','estudiante','asignar'], {relativeTo:this.activatedRouter.root, queryParams: { id: this.id } });
            }
          })
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
