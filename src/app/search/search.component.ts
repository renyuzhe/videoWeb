import { Component, OnInit } from '@angular/core';
import { getByName,video } from './search.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private resultVideos:video[] = [];
  constructor(
    private getmovie: getByName,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let name = params['name'];
      this.getmovie.support(name).subscribe(data => {
        this.resultVideos = data;
      })
    })
    
    
  }

  startPlayMovie(id:number){
    let srarchId =  this.resultVideos[id].mid;
    this.router.navigateByUrl("/play/" + srarchId);
  }

}
