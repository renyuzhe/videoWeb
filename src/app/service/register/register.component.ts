import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userRegister} from './register.service';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output('mychange') change: EventEmitter<boolean> = new EventEmitter<boolean>();
  userInfo:FormGroup;
  constructor(private fb: FormBuilder,
    private register:userRegister,
    private cookie:CookieService) { 
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

  stratRegister() {
    this.register.userName = this.userInfo.value.userName;
    this.register.passWord = this.userInfo.value.passWord;
    this.register.email = this.userInfo.value.email;
    
    this.register.register().subscribe(data=>{
      console.log(data);
      this.cookie.put("userName", this.userInfo.value.userName);
      this.cookie.put("passWord", this.userInfo.value.passWord);
      this.closeForm();
    })
    
  }

  closeForm() {
    this.change.emit(true);
  }
}
