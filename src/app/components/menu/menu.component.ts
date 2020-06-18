import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public itemActive: string;

  constructor() {
    const lastPosEndPoint = window.location.href.split('/').length - 1;
    const endPoints = window.location.href.split('/');
    let lastEndPoint = endPoints[lastPosEndPoint];

    if (lastEndPoint.length === 0) {
        lastEndPoint = "home";
    }

    this.itemActive = lastEndPoint;
    MenuService.itemActive = lastEndPoint;
  }

  alteraAtivo(active) {
    MenuService.itemActive = active;
    this.itemActive = active;
  }

  ngOnInit(): void {
  }

}
