import { Component, OnInit } from '@angular/core';
import { getSupport } from '../../service/getsupport.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-display-line',
  templateUrl: './display-line.component.html',
  styleUrls: ['./display-line.component.css']
})
export class DisplayLineComponent implements OnInit {

  public videoInfos;

  public videoImg = "";


  constructor(
    private getsu: getSupport,
    private router: Router
    ) {





  }

  ngOnInit() {
    this.getsu.support()
      .subscribe(
        data => {
        
        this.videoInfos = data;
        this.videoImg =  this.videoInfos[0].imgSrc;
        }
      )



  }


  onli(i: number) {
    this.videoImg = this.videoInfos[i].imgSrc;


  }
  linkToVideo(i: number) {
    //请求视频信息
    let vid = this.videoInfos[i].mid;
    console.log(i);
    this.router.navigateByUrl("/play/" + vid);
  }

}
