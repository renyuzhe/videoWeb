import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import {ResourceManageComponent} from './resource-manage.component';
import {resourceRoutes} from './resource-manage.router';
import { onloadVideo } from '../service/updateMovieInfo.service';
import { TabsModule } from 'ngx-bootstrap';
import { AddMovieComponent } from './add-movie/add-movie.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resourceRoutes),
    TabsModule.forRoot(),
    FormsModule
    
  ],
  declarations: [ResourceManageComponent, AddMovieComponent],
  providers:[onloadVideo]

})
export class ResourceManageModule { }
