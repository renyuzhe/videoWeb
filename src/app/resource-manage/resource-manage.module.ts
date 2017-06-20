import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import {ResourceManageComponent} from './resource-manage.component';
import {resourceRoutes} from './resource-manage.router';
import { onloadVideo } from '../service/updateMovieInfo.service';
import { TabsModule } from 'ngx-bootstrap';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { onloadActor } from '../service/uploadActorInfo.service';
import { RemoveMovieComponent } from './remove-movie/remove-movie.component';
import { getByName } from '../search/search.service';
import { UploadAdComponent } from './upload-ad/upload-ad.component';
import { onloadAds} from '../service/uploadAds.service';
import { delectVideo} from '../service/delectMovie.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SourceGuard} from './resource-manage.guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(resourceRoutes),
    TabsModule.forRoot(),
    FormsModule
    
  ],
  declarations: [ResourceManageComponent, AddMovieComponent, RemoveMovieComponent, UploadAdComponent],
  providers:[onloadVideo,onloadActor,getByName,onloadAds,delectVideo,CookieService,SourceGuard]

})
export class ResourceManageModule { }
