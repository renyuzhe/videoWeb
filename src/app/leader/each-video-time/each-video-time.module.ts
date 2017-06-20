import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { eachVideoTimeRoutes} from './each-video-time.router';
import { EachVideoTimeComponent} from './each-video-time.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { FormsModule} from '@angular/forms';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { getTimes} from '../../service/getTime.service';

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eachVideoTimeRoutes),
    
    ChartModule,
    FormsModule
  ],
  declarations: [
    EachVideoTimeComponent
  ],
  providers:[
    getTimes,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ]
})
export class EachVideoTimeModule { }
