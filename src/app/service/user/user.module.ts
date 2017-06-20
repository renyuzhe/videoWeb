import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRegister } from '../register/register.service';
import { userLogin } from '../login/login.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { userType } from '../userType.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers:[
    userRegister,
    userLogin,
    CookieService,
    userType
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
