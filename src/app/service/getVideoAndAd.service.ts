import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class getVideoAd {



    constructor(public http: Http) { }



    public support(mid: string): Observable<video> {


        let data = new URLSearchParams();
        data.append('mid', mid);


        return this.http.post(service + '/GetMovieWithAds', data)
            .map((res: Response) => {
                let result = res.json() as video;
                console.log(result);
                return result;
            })



    }

}
class video {
    ads:string;
    
    movie: string;
    
}
