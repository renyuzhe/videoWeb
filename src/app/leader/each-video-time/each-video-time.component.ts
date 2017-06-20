import { Component, OnInit } from '@angular/core';
import { getTimes, Timees } from '../../service/getTime.service';
@Component({
  selector: 'app-each-video-time',
  templateUrl: './each-video-time.component.html',
  styleUrls: ['./each-video-time.component.css']
})
export class EachVideoTimeComponent implements OnInit {


  private catagories;
  private series;
  private result: Timees[];

  private dat:da[] = [];
  options: Object;



  constructor(
    private gettimes: getTimes
  ) {

    this.gettimes.support().subscribe(data => {
      this.result = data;

      let total = 0;
      this.result.map(item => total += parseFloat(item.data) );

      this.result.map(item =>{
        let tep = new da();
        tep.name = item.name;
        tep.y = parseFloat(item.data) / total;
        this.dat.push(tep);
      })

      console.log(this.dat);
      
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
          data: this.dat
        }]
      };
    })


  }
  ngOnInit() {
  }

}

class da{
  name:string;
  y:number;

  
}
