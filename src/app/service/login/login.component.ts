import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userLogin } from './login.service';
import { CookieService } from 'angular2-cookie/core';
import { Router} from '@angular/router';
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
    private cookie: CookieService,
    private router:Router) {
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
      if(result == '3'){
        this.cookie.put("userName", this.userInfo.value.userName);
        this.cookie.put("passWord", this.userInfo.value.passWord);
        this.closeForm();
      } else if (result == "0"){
        //admin
        this.cookie.put("userName", this.userInfo.value.userName);
        this.cookie.put("passWord", this.userInfo.value.passWord);
        this.closeForm();
        this.router.navigateByUrl('admin');

      }else if(result == '1'){
        this.cookie.put("userName", this.userInfo.value.userName);
        this.cookie.put("passWord", this.userInfo.value.passWord);
        this.closeForm();
        this.router.navigateByUrl('sourceMang');
        //resourceMangage
      }else if(result == "2"){
        //leader
        this.cookie.put("userName", this.userInfo.value.userName);
        this.cookie.put("passWord", this.userInfo.value.passWord);
        this.closeForm();
        this.router.navigateByUrl('leader');
      }
    });
    
  }

  closeForm() {
    this.change.emit(true);
  }
}


