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

    public pieChartOptionsJobs: ChartOptions = {
        responsive: true,
        legend: {
            labels: {
                fontSize: 20
            }
        },

    };

    public pieChartLabelsJobs: Label[] = [ 'Manutenção', 'Aplicações inteiras', 'Melhoria e performance'];
    public pieChartDataJobs: SingleDataSet = [154, 54, 220];
    public pieChartcolorsJobs: Color[] = [
        {
            backgroundColor: ["#333", "#50d5e1", "#ddd"]
        }
    ];
    public pieChartTypeJobs: ChartType = 'pie';
    public pieChartLegendJobs = true;
    public pieChartPluginsJobs = [];

    ngOnInit(): void {
    }

    public pieChartOptionsInfo: ChartOptions = {
        responsive: true,
        legend: {
            labels: {
                fontSize: 20
            }
        },

    };

    public pieChartLabelsInfo: Label[] = [ 'Abandonados e mortos', 'Em produção', 'Em desenvolvimento'];
    public pieChartDataInfo: SingleDataSet = [48, 380, 16];
    public pieChartcolorsInfo: Color[] = [
        {
            backgroundColor: ["#333", "#ddd", "rgb(226, 11, 47)"]
        }
    ];
    public pieChartTypeInfo: ChartType = 'pie';
    public pieChartLegendInfo = true;
    public pieChartPluginsInfo = [];

}
