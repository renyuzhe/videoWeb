import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { User} from '../admin/admin.component';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';
@Injectable()
export class addUser{
    

    constructor(public http: Http) { }

    public adduser(user:User): Observable<string> {


        let data = new URLSearchParams();
        data.append('userName', user.userName);
        data.append('passWord', user.passWord);
        data.append('email', user.email);
        data.append('type',user.type);




        return this.http.post(service + '/AddUser', data)
            .map(res => {
                let result = res.json().status as string;
                return result;
            })


    }
}
