import {RouterModule,Routes} from '@angular/router';

export const appRouters: Routes = [
    {
        path:'',
        loadChildren:'./home/home.module#HomeModule',
        pathMatch:'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path:'play',
        loadChildren:'./play/play.module#PlayModule'
    },
    {
        path:'admin',
        loadChildren:'./admin/admin.module#AdminModule'
    },
    {
        path:'leader',
        loadChildren:'./leader/leader.module#LeaderModule'
    },
    {
        path:'sourceMang',
        loadChildren:'./resource-manage/resource-manage.module#ResourceManageModule'
    }
]