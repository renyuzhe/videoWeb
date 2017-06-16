import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { searchRoutes} from './search.router';
import { RouterModule } from '@angular/router';
import { SearchComponent} from './search.component';
import { getByName} from './search.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes)
  ],
  declarations: [
    SearchComponent
  ],
  providers:[
    getByName
  ]
})
export class SearchModule { }
