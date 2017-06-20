import { Component, OnInit } from '@angular/core';
import { getReport,report } from './month-times.service';
@Component({
  selector: 'app-month-times',
  templateUrl: './month-times.component.html',
  styleUrls: ['./month-times.component.css']
})
export class MonthTimesComponent implements OnInit {

  
  private catagories;
  private series:report[] = [];
  options: Object;
  private mid = "201700000001";

  findre(){
    this.getreport.support(this.mid).subscribe(data => {
      this.series = data;

      this.options = {
        chart: {
          type: 'column'
        },
        title: {
          text: '月平均播放量'
        },

        xAxis: {
          categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: '播放量 (次)'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.year}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} 次</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: this.series
      };

    })
  }

  constructor(
    private getreport:getReport
  ) {

    
    
    

    
  }
  ngOnInit() {
  }

}

