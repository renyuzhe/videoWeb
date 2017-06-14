import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRoutes } from './home.router';
import { RouterModule} from '@angular/router';
import { HomeComponent} from './home.component';
import { ModalModule } from 'ngx-bootstrap';
import { RegisterComponent} from '../service/register/register.component';
import { LoginComponent } from '../service/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRegister } from '../service/register/register.service';
import { userLogin } from '../service/login/login.service';
import { DisplayLineComponent } from './display-line/display-line.component';
import { getSupport} from '../service/getsupport.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { VideoClassifyComponent } from './video-classify/video-classify.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DisplayLineComponent,
    VideoClassifyComponent
  ],
  providers:[
    userRegister,
    userLogin,
    getSupport
  ]
})
export class HomeModule { }
