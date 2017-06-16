import {RouterModule, Routes} from '@angular/router';
import {LeaderComponent} from './leader.component';

export const leaderRoutes: Routes = [
    {
        path:'',
        component:LeaderComponent,
        children:[
            {
                path: 'eachVideoTime',
                loadChildren: './each-video-time/each-video-time.module#EachVideoTimeModule'
            }
        ]
    }
    
]