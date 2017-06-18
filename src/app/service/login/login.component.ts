import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userLogin } from './login.service';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  
  @Output('mychange') change: EventEmitter<boolean> = new EventEmitter<boolean>();
  userInfo: FormGroup;
  constructor(private fb: FormBuilder,
    private login: userLogin,
    private cookie: CookieService) {
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
    

    this.login.login().subscribe(data=>{
      let result = data;
      console.log(result);
      if(result == '1'){
        this.cookie.put("userName", this.userInfo.value.userName);
        this.cookie.put("passWord", this.userInfo.value.passWord);
        this.closeForm();
      }
    });
    
  }

  closeForm() {
    this.change.emit(true);
  }
}


