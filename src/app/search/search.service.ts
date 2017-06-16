import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from '../service/service.config';

@Injectable()
export class getByName {



    constructor(public http: Http) { }



    public support(name: string): Observable<video> {


        let data = new URLSearchParams();
        data.append('movieName', name);

        console.log("start submit");
        return this.http.post(service + '/GetMovieByName', data)
            .map((res: Response) => {
                let result = res.json() as video;
                console.log(result);
                return result;
            })



    }

}
class video {
    picture: string;
    name: string;
    description: string;
    mid: string;
    source: string;
    length: string;

}