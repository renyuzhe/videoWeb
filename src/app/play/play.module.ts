import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { PlayComponent} from './play.component';
import { playRoutes} from './play.router';
import { ModalModule } from 'ngx-bootstrap';
import { RegisterComponent } from '../service/register/register.component';
import { LoginComponent } from '../service/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRegister } from '../service/register/register.service';
import { userLogin } from '../service/login/login.service';
import { VideoCommentComponent } from './video-comment/video-comment.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  imports: [
    ModalModule.forRoot(),
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    CommonModule,
    RouterModule.forChild(playRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlayComponent,
    RegisterComponent,
    LoginComponent,
    VideoCommentComponent
  ],
  providers: [
    userRegister,
    userLogin
  ]
})
export class PlayModule { }
