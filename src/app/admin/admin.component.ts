import { Component, OnInit } from '@angular/core';
import { addUser } from '../service/addUser.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private user:User = new User();
  constructor(
    private adduser:addUser
  ) { }

  ngOnInit() {
  }

  update(){
    this.adduser.adduser(this.user).subscribe(data=>{
      console.log(data);
    })
  }

}

export class User{
  type:string;
  userName:string;
  passWord:string;
  email:string;
}
