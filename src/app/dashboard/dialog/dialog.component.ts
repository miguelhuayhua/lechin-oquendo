import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  yes = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClickYes(event: any) {
    this.yes.emit();
  }
}
