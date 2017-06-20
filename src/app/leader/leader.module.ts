import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LeaderComponent} from './leader.component';
import { leaderRoutes} from './leader.router';
import { AuthGuard } from './leader.guard';
import { userType} from '../service/userType.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(leaderRoutes)
  ],
  declarations: [LeaderComponent],
  providers:[AuthGuard,CookieService,userType]
})
export class LeaderModule { }
