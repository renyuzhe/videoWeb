import { Component, OnInit } from '@angular/core';
import { getfaq, resp} from './faq.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  private result:resp[] = [];
  private page:number = 1;
  constructor(
    private faq:getfaq
  ) { }

  ngOnInit() {
    this.faq.getfaq(this.page.toString()).subscribe(data=>{
      this.result = data;
      console.log(this.result);
    })
  }

  more(){
    this.page++;
    this.faq.getfaq(this.page.toString()).subscribe(data => {
      this.result = data;
      console.log(this.result);
    })
  }

}
