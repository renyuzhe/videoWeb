import { Component, OnInit } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import {Router} from '@angular/router';
@Component({
  selector: 'app-video-classify',
  templateUrl: './video-classify.component.html',
  styleUrls: ['./video-classify.component.css']
})
export class VideoClassifyComponent implements OnInit {
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  startPlay(i){
    this.router.navigateByUrl("play/:vid");
  }

}
