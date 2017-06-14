import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {ResourceManageComponent} from './resource-manage.component';
import {resourceRoutes} from './resource-manage.router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resourceRoutes)
  ],
  declarations: [ResourceManageComponent]
})
export class ResourceManageModule { }
