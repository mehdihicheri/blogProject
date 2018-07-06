import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	
	@Input() title: string;
	@Input() content: string;
	@Input() created_at: date;
	@Input() loveIts : number ;
	
  
  constructor() 
  {
	}
	
	onLike(){
		this.loveIts = this.loveIts + 1;
	}
	onDisLike(){
		this.loveIts = this.loveIts - 1;
	}

  ngOnInit() {
  }

}
