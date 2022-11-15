import { Component, OnInit, } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { RouterInfoService } from '../services/router-info.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
   
  }

  ngOnInit(): void {
  }

}
