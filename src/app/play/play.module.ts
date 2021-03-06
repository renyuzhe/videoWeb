import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { PlayComponent} from './play.component';
import { playRoutes} from './play.router';
import { ModalModule } from 'ngx-bootstrap';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { VideoCommentComponent } from './video-comment/video-comment.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { UserModule } from '../service/user/user.module';
import { getMovie } from '../service/getVideoInfo.service';
import { VideoInfoComponent } from './video-info/video-info.component';
import { getVideoAd } from '../service/getVideoAndAd.service';
import { addCommend} from '../service/uploadCommend.service';
import { getComment } from '../service/getComment.service';
@NgModule({
  imports: [
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    CommonModule,
    RouterModule.forChild(playRoutes),
    UserModule
  ],
  declarations: [
    PlayComponent,
    VideoCommentComponent,
    VideoInfoComponent
  ],
  providers: [
    getMovie,
    getVideoAd,
    CookieService,
    addCommend,
    getComment
  ]
})
export class PlayModule { }
