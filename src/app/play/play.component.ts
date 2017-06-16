import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { getVideoAd} from '../service/getVideoAndAd.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private vid: string;

  private isLoading: boolean = false;
  private videosrc: string = '';
  private adsrc: string = '';
  private isLogin:boolean = false;
  private isPlay:boolean = false;
  private vSrc:string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private getvideoandads:getVideoAd
    
  ) { 
    

    
    
  }

  ngOnInit() {
    
    if (this.isLogin == true) {
      this.isPlay = true;
    }
    this.activatedRoute.params.subscribe(params => {
      this.vid = params['i'];
      console.log(this.vid);
      
      this.getvideoandads.support(this.vid).subscribe(data=>{
        this.adsrc = data.ads;
        this.videosrc = data.movie;
        this.isLoading = true;
      })


    })

      
    
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
