import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AdminComponent} from './admin.component';
import { adminRoutes} from './admin.router';
import { addUser} from '../service/addUser.service';
import { PlayGuard } from './admin.guard';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule
  ],
  declarations: [AdminComponent],
  providers:[addUser,PlayGuard,CookieService]
})
export class AdminModule { }
