import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { eachVideoTimeRoutes} from './each-video-time.router';
import { EachVideoTimeComponent} from './each-video-time.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eachVideoTimeRoutes),
    ChartModule.forRoot(require('highcharts')),
    FormsModule
  ],
  declarations: [
    EachVideoTimeComponent
  ]
})
export class EachVideoTimeModule { }
