import { Component, OnInit } from '@angular/core';

import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  newcomponent = "Entered in new component created";
  newcomponentServiceProperty;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  	this.myservice.serviceProperty = "Component Created";
  	this.newcomponentServiceProperty = this.myservice.serviceProperty;
  }

}
