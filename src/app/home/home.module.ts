import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutes } from './home.router';
import { RouterModule} from '@angular/router';
import { HomeComponent} from './home.component';
import { ModalModule } from 'ngx-bootstrap';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DisplayLineComponent } from './display-line/display-line.component';
import { getSupport} from '../service/getsupport.service';
import {getClassify} from '../service/getClassify.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { VideoClassifyComponent } from './video-classify/video-classify.component';
import {UserModule} from '../service/user/user.module';
import { FAQComponent } from './faq/faq.component';
import { getfaq } from './faq/faq.service';
@NgModule({
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule,
    RouterModule.forChild(homeRoutes),
    UserModule

  ],
  declarations: [
    HomeComponent,
    
    DisplayLineComponent,
    VideoClassifyComponent,
    FAQComponent
  ],
  providers:[
    getClassify,
    getSupport,
    CookieService,
    getfaq
  ]
})
export class HomeModule { }
