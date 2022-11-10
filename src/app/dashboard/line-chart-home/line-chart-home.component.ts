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
        label: 'Goles',
        tension: .3,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderColor: '#FFF',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        fill:true

      }
    ],
    labels: ['Miguel', 'Raul', 'Jose', 'Pedro', 'Fernando', 'Maria', 'Luis']

  }
  public lineChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks:
        {
          font: {

          }, color: 'white',

        },
        grid: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: '#666'
        }
      }

    }
    ,
    maintainAspectRatio:false
  }
  public lineChartType: ChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }

}
