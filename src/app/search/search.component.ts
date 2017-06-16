import { Component, OnInit } from '@angular/core';
import { getByName } from './search.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private getmovie: getByName,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let name = params['name'];
      this.getmovie.support(name).subscribe(data => {
        console.log(data);
      })
    })
    
    
  }

}
