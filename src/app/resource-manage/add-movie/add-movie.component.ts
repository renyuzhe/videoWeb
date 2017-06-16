import { Component, OnInit } from '@angular/core';
import { onloadVideo } from '../../service/updateMovieInfo.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  private file: File;
  private video: Video = new Video();
  constructor(
    private onloadvideo: onloadVideo
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
    })
  }

}
export class Video {
  file: File;
  type: string;
  img: File;
  name: string;
  description:string;
  length:string;
}
