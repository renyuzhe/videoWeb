import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userLogin } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  @Output('mychange') change: EventEmitter<boolean> = new EventEmitter<boolean>();
  userInfo: FormGroup;
  constructor(private fb: FormBuilder,
    private login: userLogin) {
    this.creatForm();
  }

  ngOnInit() {
  }

  creatForm() {
    this.userInfo = this.fb.group({
      userName: '',
      passWord: '',
      email:''
    })
  }

  startLogin(){
    this.login.userName = this.userInfo.value.userName;
    this.login.passWord = this.userInfo.value.passWord;
    

    this.login.login();
    this.closeForm();
  }

  closeForm() {
    this.change.emit(true);
  }
}


