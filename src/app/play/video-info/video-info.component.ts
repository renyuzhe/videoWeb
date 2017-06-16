import { Component, OnInit,Input } from '@angular/core';
import { getMovie } from '../../service/getVideoInfo.service';
@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {
  public max: number = 10;
  public rate: number = 7;
  public picture: string;
  public name:string;
  public description:string;
  public length:string;
  public region:string;
  public isReadonly: boolean = true;
  @Input() vid:string;
  constructor(
    private getmovie: getMovie
  ) { }

  ngOnInit() {
    this.getmovie.support(this.vid).subscribe(data => {
      console.log(data);
      this.picture = data.picture;
      this.name = data.name;
      this.description = data.description;
      this.length = data.length;
      this.region = data.length;
      this.rate = data.score;
    })
  }

}

class actor {
  name:string;
  picture:string
}
