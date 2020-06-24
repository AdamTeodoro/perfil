import { Component, OnInit } from '@angular/core';
import { AdamService } from 'src/app/services/adam.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor(private adamService: AdamService) { }

    adams$: Observable<any[]>;

    ngOnInit(): void {
        this.adams$ = this.adamService.getAdam();
    }




}
