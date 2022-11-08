import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js'
import { NgChartsConfiguration } from 'ng2-charts';
@Component({
  selector: 'app-line-chart-home',
  templateUrl: './line-chart-home.component.html',
  styleUrls: ['./line-chart-home.component.scss']
})
export class LineChartHomeComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {

    datasets: [
      {
        data: [10, 20, 30, 40, 12, 45, 67, 32],
        label: 'Goles'
      }
    ],
    labels: ['Miguel', 'Raul', 'Jose', 'Pedro', 'Fernando', 'Maria', 'Luis']

  }
  public lineChartOptions: ChartConfiguration['options'] = {
    
  }
  public lineChartType: ChartType = 'bar';
  constructor() { }

  ngOnInit(): void {
  }

}
