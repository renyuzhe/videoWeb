import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { getVideoAd} from '../service/getVideoAndAd.service';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private vid: string;
  private searchValue: string = ''; 
  private isLoading: boolean = false;
  private videosrc: string = '';
  private adsrc: string = '';
  private isLogin:boolean = false;
  private isPlay:boolean = false;
  private vSrc:string = "";
  
  private userName;

  constructor(
    private activatedRoute:ActivatedRoute,
    private getvideoandads:getVideoAd,
    private cookie:CookieService,
    private router: Router
  ) {  
    let userName = this.cookie.get("userName");
    if (typeof (userName) == "undefined") {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.userName = userName;
    }   
  }

  ngOnInit() {
    
    

    
    this.activatedRoute.params.subscribe(params => {
      this.vid = params['i'];
      console.log(this.vid);

      this.getvideoandads.support(this.vid).subscribe(data=>{
        this.adsrc =  data.ads;
        this.videosrc =  data.movie;
        console.log(this.adsrc + this.videosrc);
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
    let userName = this.cookie.get("userName");
    if (typeof (userName) == "undefined") {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.userName = userName;
    }
  }

  public showLoginModal(): void {
    this.loginModal.show();
  }

  public hideLoginModal(): void {
    this.loginModal.hide();
    let userName = this.cookie.get("userName");
    if (typeof (userName) == "undefined") {
      this.isLogin = false;
    } else {
      this.isLogin = true;
      this.userName = userName;
    }
  }

  closeRegister(event: boolean) {
    this.hideRegisterModal();
  }

  closeLogin(event: boolean) {
    this.hideLoginModal();
  }

  next(){
    console.log("next video");
    this.isLogin = true;
    
  }

  search() {
    console.log(this.searchValue);
    this.router.navigateByUrl('/search/' + this.searchValue);
  }
  outLogin() {
    this.cookie.removeAll();
    this.isLogin = false;
  }
 


}
