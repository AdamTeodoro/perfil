import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {

    @Input('itemActive') itemActive: string;

    constructor(private menuService: MenuService) { }
    
    alteraAtivo(active: string) {
        this.itemActive = active;
    }
    
    ngOnInit(): void {
        this.itemActive = this.menuService.getLastPath();
    }
}
