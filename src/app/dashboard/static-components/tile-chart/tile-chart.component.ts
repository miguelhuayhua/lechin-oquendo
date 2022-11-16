import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-tile-chart',
  templateUrl: './tile-chart.component.html',
  styleUrls: ['./tile-chart.component.scss']
})
export class TileChartComponent implements OnInit {

  public barChartData: ChartConfiguration['data'] = {

    datasets: [
      {
        data: [10, 20, 30, 40, 12, 45, 67, 32],
        label: 'Goles',
        backgroundColor: '#005',
        borderColor: '#FFF',
        categoryPercentage: .5
      }
    ],
    labels: ['Miguel', 'Raul', 'Jose', 'Pedro', 'Fernando', 'Maria', 'Luis']

  }
  public barChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        labels: {
          color: 'black'
        }
      },

    },
    scales: {
      x: {

        stacked: true,
        ticks:
        {
          font: {

          }, color: 'black',

        },
        grid: {
          color: 'transparent',
        }

      },
      y: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'rgba(0,0,0,0.05)',
          borderDash: [8, 3],
        },
        beginAtZero: true
      },
    }
    ,
    maintainAspectRatio: false
  }
  public barChartType: ChartType = 'bar';
  constructor() { }

  ngOnInit(): void {
  }

}
