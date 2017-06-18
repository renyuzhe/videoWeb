import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AdminComponent} from './admin.component';
import { adminRoutes} from './admin.router';
import { addUser} from '../service/addUser.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule
  ],
  declarations: [AdminComponent],
  providers:[addUser]
})
export class AdminModule { }
