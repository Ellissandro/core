import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
import { data } from '../../charlist';


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events: ChartEvent;
}

@Component({
  selector: 'app-grapic-bar',
  templateUrl: './grapic-bar.component.html',
  styleUrls: ['./grapic-bar.component.scss']
})
export class GrapicBarComponent implements OnInit{
  ngOnInit(): void {
    var chart = new Chartist.Line('.ct-chart', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4,9, 23],
      ]
    }, {
      low: 0,
      showArea: true,
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 2
      }),
    });
    
    chart.on('draw', function(data: any) {
      if(data.type === 'point') {
        var circle = new Chartist.Svg('circle', {
          cx: [data.x], cy:[data.y], r:[7],
        }, 'ct-circle');
        data.element.replace(circle);
      }
    });
  }
  type: ChartType = 'Line';
  lineArea: Chart = {
    type: 'Line',
    data: data['lineAreaDashboard'],
    options: {
      low: 0,
      showArea: true,
      fullWidth: true,
      onlyInteger: true,
      axisY: {
        low: 0,
        scaleMinSpace: 20,
      },
      axisX: {
        showGrid: false
      }
    },
    events: {
      created(data: any): void {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(0, 201, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(146, 254, 157, 1)'
        });

        defs.elem('linearGradient', {
          id: 'gradient1',
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 0
        }).elem('stop', {
          offset: 0,
          'stop-color': 'rgba(132, 60, 247, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': 'rgba(56, 184, 242, 1)'
        });
      },

    },
  }
}

// new Chartist.Line('.ct-chart', {
//   labels: [1, 2, 3, 4, 5],
//   series: [
//     [20, 0, 20, 0, 20],
//     [0, 20, 0, 20, 0]
//   ]
// }, {
//   lineSmooth: Chartist.Interpolation.simple({
//     divisor: 2
//   }),
//   fullWidth: true,
//   chartPadding: {
//     right: 20,
//   },
//   low: 0
// });