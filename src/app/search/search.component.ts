import { Component, OnInit } from '@angular/core';
import { getByName } from './search.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private getmovie: getByName,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let name = params['name'];
      this.getmovie.support(name).subscribe(data => {
        console.log(data);
      })
    })
    
    
  }

  startPlayMovie(){
    this.router.navigateByUrl("/play/"+"12341");
  }

}
