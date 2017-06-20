import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthTimesComponent } from './month-times.component';
import { RouterModule } from '@angular/router';
import { monthTimeRoutes} from './month-times.router';
import { FormsModule } from '@angular/forms';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartModule } from 'angular2-highcharts';
import { getReport} from './month-times.service';
export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(monthTimeRoutes),
    FormsModule,
    ChartModule
  ],
  declarations: [MonthTimesComponent],
  providers: [
    getReport,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ]
})
export class MonthTimesModule { }
