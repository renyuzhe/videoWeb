import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { addCommentInfo} from '../play/video-comment/video-comment.component';
import { Observable } from 'rxjs/Observable';
import { service } from './service.config';
@Injectable()
export class addCommend {


    constructor(public http: Http) { }

    public addcomment(info: addCommentInfo): Observable<string> {


        let data = new URLSearchParams();
        data.append('uname', info.uname);
        data.append('comment', info.comment);
        data.append('mid', info.mid);
        data.append('score',info.score);
        




        return this.http.post(service + '/addComment', data)
            .map(res => {
                let result = res.json().status as string;
                return result;
            })


    }
}


