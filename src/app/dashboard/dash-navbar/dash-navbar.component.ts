import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { RouterInfoService } from 'src/app/services/router-info.service';
@Component({
  selector: 'app-dash-navbar',
  templateUrl: './dash-navbar.component.html',
  styleUrls: ['./dash-navbar.component.scss']
})
export class DashNavbarComponent implements OnInit {
  showUserOptions: boolean = false;
  //data info
   dashInfo: string = '';
  constructor(private router: Router, private routerInfo: RouterInfoService) {
    router.events.subscribe(data => {
      let url: string = (data as RouterEvent).url
      this.dashInfo = url;
    })
  }

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
