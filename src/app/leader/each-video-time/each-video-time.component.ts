import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-video-time',
  templateUrl: './each-video-time.component.html',
  styleUrls: ['./each-video-time.component.css']
})
export class EachVideoTimeComponent implements OnInit {

  private type: string = 'bar';
  private catagories;
  private series;
  options: Object;
  


  constructor() {
    this.catagories = ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'];
    this.series = [{
      name: '1800 年',
      data: [107, 31, 635, 203, 2]
    }, {
      name: '1900 年',
      data: [133, 156, 947, 408, 6]
    }, {
      name: '2008 年',
      data: [973, 914, 4054, 732, 34]
    }];

    this.options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: '各洲不同时间的人口条形图'
      },
      subtitle: {
        text: '数据来源: Wikipedia.org'
      },
      xAxis: {
        categories: this.catagories,
        title: {
          text: null
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: '人口总量 (百万)',
          align: 'high'
        },
        labels: {
          overflow: 'justify'
        }
      },
      tooltip: {
        valueSuffix: ' 百万'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
            allowOverlap: true
          }
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: ('#FFFFFF'),
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: this.series
    };
  }
  ngOnInit() {
  }

}
