import { Component, OnInit,Input } from '@angular/core';
import { getMovie,acter } from '../../service/getVideoInfo.service';
@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {
  public max: number = 10;
  public rate: number;
  public picture: string;
  public name:string;
  public description:string;
  public length:string;
  public region:string;
  public isReadonly: boolean = true;
  public director:string;
  public actors:acter[];
  public score:number;
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
      this.score = this.rate = data.score;
      this.director = data.director;
      this.actors = data.actor;

      
    })
  }

}


