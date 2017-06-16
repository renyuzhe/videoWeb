import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-video-comment',
  templateUrl: './video-comment.component.html',
  styleUrls: ['./video-comment.component.css']
})
export class VideoCommentComponent implements OnInit {

  
  @Input() vid: string;

  public commentMax: number = 10;
  public commentRate: number = 7;
  public commentIsReadonly: boolean = false;

  public overStar: number;
  public percent: number;


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

  constructor(
    
  ) { }

  ngOnInit() {
  }

}
