import { Component, OnInit } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js'
@Component({
  selector: 'app-bar-chart-home',
  templateUrl: './bar-chart-home.component.html',
  styleUrls: ['./bar-chart-home.component.scss']
})
export class BarChartHomeComponent implements OnInit {

  public barChartData: ChartConfiguration['data'] = {

    datasets: [
      {
        data: [10, 20, 30, 40, 12, 45, 67, 32],
        label: 'Goles',
        tension: .3,
        backgroundColor: 'rgba(90, 115, 166,0.9)',
        borderColor: '#FFF',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        categoryPercentage: 1
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
    indexAxis: 'y',
    scales: {
      x: {

        stacked: true,
        ticks:
        {
          font: {

          }, color: 'black',

        },
        grid: {
          color: 'rgba(0,0,0,0.4)',
          borderDash: [8, 3],
        }
        
      },
      y: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'transparent',
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
