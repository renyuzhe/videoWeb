import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { AdminComponent} from './admin.component';
import { adminRoutes} from './admin.router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
