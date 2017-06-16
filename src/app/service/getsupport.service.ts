import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,Response, } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';


@Injectable()
export class getSupport {

    public info:any[];
    
    constructor(public http: Http) { }


    public support():Observable<video[]>{
        return this.http.get(service + '/Support')
            .map((res: Response) =>{
                let result = res.json() as video[];
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
    imgSrc: string;
    imgName: string;
    mid: string;
}