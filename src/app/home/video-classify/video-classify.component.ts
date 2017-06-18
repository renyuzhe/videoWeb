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
  private mids: string[] = ["1","2","3"];
  constructor(
    private router:Router,
    private getclassify:getClassify
  ) { }

  ngOnInit() {
    console.log(this.mids.toString());
    this.getScienceMovie();
  }

  startPlay(i){
    this.router.navigateByUrl("/play/" + this.classifyInfo[i].mid);
  }



  getClassify(){
    return this.classifyInfo;
  }

  getScienceMovie(){
    this.getclassify.support("科幻", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

  getActionMovie(){
    this.getclassify.support("动作", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

  getLoveMovie(){
    this.getclassify.support("爱情", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

 

  

}

class video {
  picture: string;
  name: string;
  description: string;
  mid: string;
}
