import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {


  private videosrc: string = 'assets/video/test.mp4';
  private adsrc: string = 'assets/video/ac.mp4';
  private isLogin:boolean = false;
  private isPlay:boolean = false;
  private vSrc:string = "";
  constructor() { }

  ngOnInit() {
    if(this.isLogin == true){
      this.isPlay = true;
    }
    
  }

  @ViewChild('registerModal') public registerModal: ModalDirective;
  @ViewChild('loginModal') public loginModal: ModalDirective;

  public showRegisterModal(): void {
    this.registerModal.show();
  }

  public hideRegisterModal(): void {
    this.registerModal.hide();
  }

  public showLoginModal(): void {
    this.loginModal.show();
  }

  public hideLoginModal(): void {
    this.loginModal.hide();
  }

  closeRegister(event: boolean) {
    this.hideRegisterModal();
  }

  closeLogin(event: boolean) {
    this.hideLoginModal();
  }

  next(){
    console.log("next video");
    this.isPlay = true;
    
  }


}
