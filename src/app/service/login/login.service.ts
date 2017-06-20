import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {service} from '../service.config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class userLogin {
    public userName: string;
    public passWord: string;
   
    constructor(public http: Http) { }

    public login():Observable<string> {
        let data = new URLSearchParams();
        data.append('userName', this.userName);
        data.append('passWord', this.passWord);
        

        return this.http.post(service + '/Login', data)
            .map(res =>{
                let result = res.json().status as string;
                return result;
            })
            
    }


    
}