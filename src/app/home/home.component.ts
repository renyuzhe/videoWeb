import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  closeRegister(event:boolean){
    this.hideRegisterModal();
  }

  closeLogin(event: boolean) {
    this.hideLoginModal();
  }



  
}
