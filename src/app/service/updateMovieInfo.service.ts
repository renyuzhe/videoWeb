import { Http, RequestOptions, Headers } from '@angular/http';
import { service } from '../service/service.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Video} from '../resource-manage/add-movie/add-movie.component';
@Injectable()
export class onloadVideo {

    private formData: FormData = new FormData();
    
    constructor(
        public http: Http
        ) { }



    public support(user: Video): Observable<string> {


        this.formData = new FormData();  
        this.formData.append('video', user.file, user.file.name);
        this.formData.append('img',user.img, user.img.name);
        this.formData.append("type",user.type);
        this.formData.append('name',user.name);
        this.formData.append('description',user.description);
        this.formData.append('length',user.length);
        
        
        let headers = new Headers({
             "Accept": "application/json"
          });
        let options = new RequestOptions({ headers });

        return this.http.post( service + "/UploadServlet", this.formData, options)
       .map(res => {
            let result = res.text() as string;
            console.log()
            return result;
       })
       



    }

}

