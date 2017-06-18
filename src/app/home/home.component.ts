import { Component, OnInit, ViewChild, OnChanges} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private isLogin:boolean = false;
  private userName;
  constructor(
    private router:Router,
    private cookie:CookieService
  ) { }

  ngOnInit() {
    let userName = this.cookie.get("userName");
    if (typeof (userName) == "undefined"){
      this.isLogin = false;
    }else{
      this.isLogin = true;
      this.userName = userName;
    }
    
    
    
  }

  private searchValue:string = ''; 

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

  closeRegister(event:boolean){
    this.hideRegisterModal();
  }

  closeLogin(event: boolean) {
    this.hideLoginModal();
  }

  search(){
    console.log(this.searchValue);
    this.router.navigateByUrl('/search/' + this.searchValue);
  }

  outLogin(){
    this.cookie.removeAll();
    this.isLogin = false;
  }

  
  



  
}
