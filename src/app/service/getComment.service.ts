import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class getComment {



    constructor(public http: Http) { }



    public support(mid: string, page: string): Observable<commentIn> {


        let data = new URLSearchParams();
        data.append('mid', mid);
        data.append('page', page);

        return this.http.post(service + '/getComment', data)
            .map((res: Response) => {
                let result = res.json() as commentIn;
                console.log(result);
                return result;
            })
        


    }

}

export class commentIn{
    cmtNum:string;
    comment:commentBody[]
}

export class commentBody{
    uname: string;
    comment: string;
    date: string;
}
