import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartConfiguration } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  chartType: ChartType = 'doughnut';
  chartConfiguration: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        font: {
          weight: 'bold'
        }
      },
    }
  }
  chartData: ChartConfiguration['data'] = {
    datasets: [
      { data: [100, 220, 50, 90, 80] }
    ],
    labels: ['Algebra', 'Física', 'Calculo II', 'Álgebra II', 'Reposteria']
  }
  constructor() { }

  ngOnInit(): void {
  }

}
