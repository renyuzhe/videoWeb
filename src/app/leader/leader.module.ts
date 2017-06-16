import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { LeaderComponent} from './leader.component';
import { leaderRoutes} from './leader.router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(leaderRoutes)
  ],
  declarations: [LeaderComponent]
})
export class LeaderModule { }
