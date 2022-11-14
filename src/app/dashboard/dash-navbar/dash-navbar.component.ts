import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent implements OnInit {
  showUserOptions: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  handleMouseEnter(event: MouseEvent): void {
    this.showUserOptions = true;
  }
  handleMouseLeave(event: MouseEvent): void {
    this.showUserOptions = false;
  }
  handleClickButton(event: any): void {
    this.showUserOptions = !this.showUserOptions;
  }
}
