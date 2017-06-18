import { Http, RequestOptions, Headers } from '@angular/http';
import { service } from '../service/service.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Actor } from '../resource-manage/add-movie/add-movie.component';
@Injectable()
export class onloadActor {

    private formData: FormData = new FormData();

    constructor(
        public http: Http
    ) { }



    public support(actor: Actor): Observable<actorAll[]> {


        this.formData = new FormData();

        this.formData.append('img', actor.actorImg, actor.actorImg.name);
        this.formData.append('mid', actor.mid);
        this.formData.append('name', actor.actorName);


        let headers = new Headers({
            "Accept": "application/json"
        });
        let options = new RequestOptions({ headers });

        return this.http.post(service + "/UploadMovieWithActor", this.formData, options)
            .map(res => {
                let result = res.json() as actorAll[];
                console.log()
                return result;
            })




    }

}

export class actorAll{
    name:string;
    img:string;
}