import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
import { service } from '../../service/service.config';
@Injectable()
export class getfaq {


    constructor(public http: Http) { }

    public getfaq(page: string): Observable<resp[]> {


        let data = new URLSearchParams();
        data.append('page', page);
        




        return this.http.post(service + '/getFAQ', data)
            .map(res => {
                let result = res.json() as resp[];
                return result;
            })


    }
}

export class resp{
    "question":string;
    "answer":string;
}
