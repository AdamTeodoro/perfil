import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public mostra: boolean = false;
    constructor() { }

    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            labels: {
                fontSize: 20
            }
        }
    };

    public pieChartLabels: Label[] = [ 'Manutenção', 'Aplicações inteiras', 'Melhoria e performance'];
    public pieChartData: SingleDataSet = [31, 18, 51];
    public pieChartcolors: Color[] = [
        {
            backgroundColor: ["#333", "rgb(226, 11, 47)", "#ddd"]
        }
    ];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    ngOnInit(): void {
    }
}
