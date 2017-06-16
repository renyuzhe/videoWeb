import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class getClassify {

    

    constructor(public http: Http) { }



    public support(classify:string, page:string): Observable<video[]> {

        
        let data = new URLSearchParams();
        data.append('type', classify);
        data.append('page', page);
        
        return this.http.post(service + '/GetMovieByType',data)
            .map((res: Response) => {
                let result = res.json() as video[];
                console.log(result);
                return result;
            })
        // .then(res=>res.json().data as any[])

        // 
        // .subscribe(res =>{
        //     this.info = res;
        //     return this.info;
        // });


    }

}
class video {
    picture: string;
    name: string;
    description:string;
    mid: string;
}