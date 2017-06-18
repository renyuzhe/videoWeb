import { Component, OnInit } from '@angular/core';
import { onloadVideo } from '../../service/updateMovieInfo.service';
import { onloadActor,actorAll } from '../../service/uploadActorInfo.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  private file: File;
  private video: Video = new Video();
  private actorResult: actorAll[] = [
    {
      "name":"lisixian",
      "img":"assets/1.png"
    },
    {
      "name": "longjingling",
      "img": "assets/1.png"
    }
  ]
  private actor: Actor = new Actor();
  private movieMid;
  private 
  constructor(
    private onloadvideo: onloadVideo,
    private onloadactor: onloadActor
  ) { }

  ngOnInit() {

  }
  onVideoChanged(fileList: FileList) {
    if (fileList.length > 0) {
      this.video.file = fileList[0];
      
    }
  }

  onImageChanged(fileList: FileList){
    if(fileList.length > 0){
      this.video.img = fileList[0];
    }
  }
  update() {
    
    
    this.onloadvideo.support(this.video).subscribe(data => {
      console.log(data);
      this.movieMid = data;

      this.actor.mid = this.movieMid;
    })
  }

  addActor(){
    
    this.onloadactor.support(this.actor).subscribe(data=>{
      
      console.log(data);
      
    })
  }

  onActorImageChanged(fileList: FileList){
    if (fileList.length > 0) {
      this.actor.actorImg = fileList[0];
    }
  }

}
export class Video {
  file: File;
  type: string;
  img: File;
  name: string;
  description:string;
  length:string;
  director:string;
  region:string;
  
}

export class Actor{
  mid:string;
  actorName:string;
  actorImg:File;
}





