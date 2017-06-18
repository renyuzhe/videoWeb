import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class delectVideo {



    constructor(public http: Http) { }



    public support(delectList: string): Observable<string> {


        let data = new URLSearchParams();
        data.append('mids',delectList);


        return this.http.post(service + '/DeleteMovieByIds', data)
            .map((res: Response) => {
                let result = res.json().status as string;
                console.log(result);
                return result;
            })



    }

}
