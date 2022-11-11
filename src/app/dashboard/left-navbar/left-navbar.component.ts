import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent implements OnInit {

  dashboardActivo: boolean = false;
  maestrosActivo: boolean = false;
  constructor() {
    this.dashboardActivo, this.maestrosActivo = false;
  }

  ngOnInit(): void {
  }

}
