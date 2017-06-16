import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { getClassify} from '../../service/getClassify.service';
@Component({
  selector: 'app-video-classify',
  templateUrl: './video-classify.component.html',
  styleUrls: ['./video-classify.component.css']
})
export class VideoClassifyComponent implements OnInit {

  private classifyInfo:video[]; 
  
  constructor(
    private router:Router,
    private getclassify:getClassify
  ) { }

  ngOnInit() {
    this.getclassify.support("爱情","1")
      .subscribe(data=>{
        this.classifyInfo = data;
        
      })
  }

  startPlay(i){
    this.router.navigateByUrl("/play/" + this.classifyInfo[i].mid);
  }



  getClassify(){
    return this.classifyInfo;
  }

 

  

}

class video {
  picture: string;
  name: string;
  description: string;
  mid: string;
}
