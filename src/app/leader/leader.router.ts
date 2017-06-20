import {RouterModule, Routes} from '@angular/router';
import {LeaderComponent} from './leader.component';
import {AuthGuard} from './leader.guard';
export const leaderRoutes: Routes = [
    {
        path:'',
        component:LeaderComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path: 'eachVideoTime',
                loadChildren: './each-video-time/each-video-time.module#EachVideoTimeModule'
            },
            {
                path: 'monthTime',
                loadChildren: './month-times/month-times.module#MonthTimesModule'
            }
        ]
    }
    
]