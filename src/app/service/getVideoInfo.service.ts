import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class getMovie {



    constructor(public http: Http) { }



    public support(mid: string): Observable<video> {


        let data = new URLSearchParams();
        data.append('mid', mid);
        

        return this.http.post(service + '/GetMovieByID', data)
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
    source:string;
    length:string;
    score:number;
    actor:acter[];
}
class acter{
    name: string;
    picture: string;
}