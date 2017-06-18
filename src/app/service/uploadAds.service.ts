import { Http, RequestOptions, Headers } from '@angular/http';
import { service } from '../service/service.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Ads } from '../resource-manage/upload-ad/upload-ad.component';
@Injectable()
export class onloadAds {

    private formData: FormData = new FormData();

    constructor(
        public http: Http
    ) { }



    public support(ads: Ads): Observable<string> {


        this.formData = new FormData();

        this.formData.append('video', ads.video, ads.video.name);

        this.formData.append('name', ads.name);


        let headers = new Headers({
            "Accept": "application/json"
        });
        let options = new RequestOptions({ headers });

        return this.http.post(service + "/UploadAds", this.formData, options)
            .map(res => {
                let result = res.text() as string;
                console.log()
                return result;
            })




    }

}

