import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {PlayGuard} from './admin.guard';
export const adminRoutes:Routes = [
    {
        path:'',
        component:AdminComponent,
        canActivate:[PlayGuard]
    }
]