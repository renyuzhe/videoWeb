import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { service } from '../service.config';
@Injectable()
export class userRegister{
    public userName:string;
    public passWord:string;
    public email: string;
    
    constructor(public http:Http){}

    public register(): Observable<string>{
        

        let data = new URLSearchParams();
        data.append('userName',this.userName);
        data.append('passWord',this.passWord);
        data.append('email',this.email);
        

        

        return this.http.post(service + '/Register', data)
            .map(res => {
                let result = res.json().status as string;
                return result;
            })
            
            
    }
}


