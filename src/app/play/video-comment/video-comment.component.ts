import { Component, OnInit,Input } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { addCommend } from '../../service/uploadCommend.service';
import { getComment, commentIn, commentBody } from '../../service/getComment.service';
@Component({
  selector: 'app-video-comment',
  templateUrl: './video-comment.component.html',
  styleUrls: ['./video-comment.component.css']
})
export class VideoCommentComponent implements OnInit {

  
  @Input() vid: string;

  private commentInfo:string;

  public addcomment: addCommentInfo = new addCommentInfo();
  public commentMax: number = 10;
  public commentRate: number = -1;
  public commentIsReadonly: boolean = false;

  public overStar: number;
  public percent: number;

  private conmmentresult: commentBody[] = [];
  public maxSize: number = 5;
  public bigTotalItems: number = 175;
  public bigCurrentPage: number = 1;
  public numPages: number = 0;

  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.commentMax);
    console.log(this.commentRate);
    
  };

  public resetStar(): void {
    this.overStar = void 0;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    
    console.log('Number items per page: ' + event.itemsPerPage);
    
  }
  call(){
    this.getcomment.support(this.vid, this.bigCurrentPage.toString()).subscribe(data => {
      
      this.conmmentresult = data.comment;
    })
  }

  constructor(
    private cookie:CookieService,
    private add:addCommend,
    private getcomment:getComment
  ) { }

  ngOnInit() {
    this.getcomment.support(this.vid,"1").subscribe(data=>{
      console.log(data.comment);
      this.conmmentresult = data.comment;
      console.log(this.conmmentresult);
    })
  }

  comment(){
    this.addcomment.mid = this.vid;
    this.addcomment.comment =this.commentInfo;
    this.addcomment.uname = this.cookie.get("userName");
    this.addcomment.score = this.commentRate.toString();
    this.add.addcomment(this.addcomment).subscribe(data=>{
      console.log(data);
    })
  }

}

export class addCommentInfo{
  uname:string;
  comment:string;
  mid:string;
  score:string;
}
