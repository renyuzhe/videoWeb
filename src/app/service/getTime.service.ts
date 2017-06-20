import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';

@Injectable()
export class getTimes {



    constructor(public http: Http) { }



    public support(): Observable<Timees[]> {




        return this.http.get(service + '/Report')
            .map((res: Response) => {
                let result = res.json() as Timees[];
                console.log(result);
                return result;
            })



    }

}

export class Timees{
    name: string;
    data: string;
}
