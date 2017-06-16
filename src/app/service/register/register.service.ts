import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { service } from '../service.config';
@Injectable()
export class userRegister{
    public userName:string;
    public passWord:string;
    public email: string;
    
    constructor(public http:Http){}

    public register(){
        console.log("start register");
        // let body =
        //     { "userName": this.userName, "passWord": this.passWord, "email": this.email };
        

        // let headers = new Headers(
        //     { 'Content-Type': 'text/html', 'charset':'utf-8' }
            
        //     ); 
        // let options = new RequestOptions({
        //     headers: headers
        // })

        // console.log(body);

        let data = new URLSearchParams();
        data.append('userName',this.passWord);
        data.append('passWord',this.passWord);
        data.append('email',this.email);
        

        

        this.http.post(service + '/video/Register', data)
            .map(res => res.json())
            .toPromise()
            .then(data => {
                console.log(data.status);
            })
            
    }
}


