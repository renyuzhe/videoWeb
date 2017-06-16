import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  private searchValue:string = ''; 

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



  
}
