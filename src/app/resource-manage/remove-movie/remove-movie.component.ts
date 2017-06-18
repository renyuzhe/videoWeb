import { Component, OnInit } from '@angular/core';
import { getByName, video} from '../../search/search.service';
@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.css']
})
export class RemoveMovieComponent implements OnInit {
  private videoResult: video;
  private testData = [
    {
      "mid": "1234",
      "name": "速度与激情5"
    },
    {
      "mid": "5678",
      "name": "速度与激情6"
    }
    
  ]
  private searchVideo: string;
  constructor(
    private getbyname:getByName
  ) { }

  ngOnInit() {
  }

  search(){
    this.getbyname.support(this.searchVideo).subscribe(data=>{
      console.log(data);
      this.videoResult = data;
    })
  }

  delectMovieById(i:number){
    let delectId = this.testData[i].mid;
    console.log("delect" + delectId);
    
  }

}
