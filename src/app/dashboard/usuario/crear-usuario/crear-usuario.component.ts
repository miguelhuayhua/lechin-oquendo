import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  //data
  tipo: string = '';

  //user data
  usuario: string = "";
  token_cea: string = this.makeid();
  id: string = "";
  constructor(private activatedRouter: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe(data => {
      this.id = (data as { id: string }).id;
    })
    this.activatedRouter.data.subscribe(data => {
      this.tipo = (data as { tipo: string }).tipo;
    })
  }
  //handle events
  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();


    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.yes.subscribe(() => {

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
