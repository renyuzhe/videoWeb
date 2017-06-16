import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRouters } from './app.router';



@NgModule({
  declarations: [

    AppComponent

  ],
  imports: [

    BrowserModule,

    HttpModule,
    RouterModule.forRoot(appRouters)

  ],


  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
