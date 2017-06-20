import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from '../../service/service.config';

@Injectable()
export class getReport {



    constructor(public http: Http) { }



    public support(mid:string): Observable<report[]> {


        let data = new URLSearchParams();
        data.append('mid', mid);

        return this.http.post(service + '/Report', data)
            .map((res: Response) => {
                let result = res.json() as report[];
                console.log(result);
                return result;
            })
    }

}
export class report {
    name: string;
    data: number[];
    
}