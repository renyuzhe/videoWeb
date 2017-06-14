import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {service} from '../service.config';
@Injectable()
export class userLogin {
    public userName: string;
    public passWord: string;
   
    constructor(public http: Http) { }

    public login() {
        console.log("start login");
        let body = JSON.stringify(
            { "username": this.userName, "password": this.passWord }
        )

        let headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
        let options = new RequestOptions({
            headers: headers
        })

        this.http.post(service + '/login', body, options)
            .map(res => res.text())
            .subscribe(data => {
                console.log(data);
            });
    }
}