import { Component, OnInit } from '@angular/core';
import { getByName, video} from '../../search/search.service';
import { delectVideo } from '../../service/delectMovie.service';

@Component({
  selector: 'app-remove-movie',
  templateUrl: './remove-movie.component.html',
  styleUrls: ['./remove-movie.component.css']
})
export class RemoveMovieComponent implements OnInit {

  private delectList: string[] = [];
  private videoResult: video;
  private testData:video[] = [
    
    
  ]
  private searchVideo: string;
  constructor(
    private getbyname:getByName,
    private delectvideo:delectVideo
  ) { }

  ngOnInit() {
    
  }

  search(){
    this.getbyname.support(this.searchVideo).subscribe(data=>{
      console.log(data);
      this.testData = data;
    })
  }

  addToDelectList(item:string){
    
    if (this.delectList.indexOf(item) == -1){
      
      this.delectList.push(item);
    }else{
      
      this.delectList = this.delectList.filter(each => each != item);

    }
    
  }

  delectMovieById(){
    console.log(this.delectList);
    console.log(this.delectList.join(","));
    this.delectvideo.support(this.delectList.join(",")).subscribe(data =>{
      console.log(data);
    })
  }

}
