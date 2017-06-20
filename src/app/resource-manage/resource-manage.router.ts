import {RouterModule, Routes} from '@angular/router';
import {ResourceManageComponent} from './resource-manage.component';
import { SourceGuard } from './resource-manage.guard';
export const resourceRoutes: Routes = [
    {
        path: '',
        component: ResourceManageComponent,
        canActivate:[SourceGuard]
    }
]