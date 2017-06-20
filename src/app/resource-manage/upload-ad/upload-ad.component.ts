import { Component, OnInit } from '@angular/core';
import { onloadAds } from '../../service/uploadAds.service';
@Component({
  selector: 'app-upload-ad',
  templateUrl: './upload-ad.component.html',
  styleUrls: ['./upload-ad.component.css']
})
export class UploadAdComponent implements OnInit {

  private file:File;
  private ads:Ads = new Ads();
  constructor(
    private onloadads:onloadAds
  ) { }

  ngOnInit() {
  }

  uploadAds(){
    this.onloadads.support(this.ads).subscribe(data=>{
      console.log(data);
    })
  }
  onAdsChanged(fileList: FileList){
    if (fileList.length > 0) {
      this.ads.video = fileList[0];

    }
  }

}

export class Ads{
  name:string;
  video:File;
  company:string;
}
