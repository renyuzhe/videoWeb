import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-video-time',
  templateUrl: './each-video-time.component.html',
  styleUrls: ['./each-video-time.component.css']
})
export class EachVideoTimeComponent implements OnInit {


  private catagories;
  private series;
  options: Object;
  


  constructor() {
    

    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: '视频浏览量占比'
      },
      tooltip: {
        headerFormat: '{series.name}<br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            
          }
        }
      },
      series: [{
        type: 'pie',
        name: '访问量占比',
        data: [
          {
            name: 'Firefox',
            y: 45.0
          },
          {
            name: 'IE',
            y: 26.8
          },
          {
            name: 'Safari',
            y: 8.5
          },
          {
            name: 'Chrome',
            y: 12.8,
            
          },
          
          {
            name: 'Opera',
            y: 6.2
          },
          {
            name: '其他',
            y: 0.7
          }
          
        ]
      }]
    };
  }
  ngOnInit() {
  }

}
