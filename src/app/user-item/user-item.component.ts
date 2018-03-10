import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: String; 

  // <-- Added Input Annotation. Input annotation is used to get data input for this name field from another componenet. 
  //but for now, know that this syntax allows us to pass in avalue from the parent template.

  constructor() { 
  	//this.name = 'John';
  }

  ngOnInit() {
  }

}
