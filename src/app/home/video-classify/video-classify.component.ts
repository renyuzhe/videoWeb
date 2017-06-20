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

  private classifyInfo:video[] = [];
  private typeNow: string;
  private page = 1;
  private mids: string[] = ["1","2","3"];
  constructor(
    private router:Router,
    private getclassify:getClassify
  ) { }

  ngOnInit() {
    console.log(this.mids.toString());
    
    this.getLoveMovie();
  }

  startPlay(i){
    this.router.navigateByUrl("/play/" + this.classifyInfo[i].mid);
  }



  getClassify(){
    return this.classifyInfo;
  }

  getClassifyWithoutFirst(){
    return this.classifyInfo.filter(item => item != this.classifyInfo[0]);
  }

  getScienceMovie(){
    this.typeNow = "科幻";
    this.page = 1;
    this.getclassify.support("科幻", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

  getActionMovie(){
    this.typeNow = "动作";
    this.page = 1;
    this.getclassify.support("动作", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

  getLoveMovie(){
    this.typeNow = "惊悚";
    this.page = 1;
    this.getclassify.support("惊悚", "1")
      .subscribe(data => {
        this.classifyInfo = data;

      })
  }

  changeNext(){
    this.page++;
    if (this.typeNow == "惊悚"){
      this.getclassify.support("惊悚", this.page.toString())
        .subscribe(data => {
          this.classifyInfo = data;

        })
    }

    if (this.typeNow == "动作") {
      this.getclassify.support("动作", this.page.toString())
        .subscribe(data => {
          this.classifyInfo = data;

        })
    }

    if (this.typeNow == "科幻") {
      this.getclassify.support("科幻", this.page.toString())
        .subscribe(data => {
          this.classifyInfo = data;

        })
    }
  }

 

  

}

class video {
  picture: string;
  name: string;
  description: string;
  mid: string;
}
