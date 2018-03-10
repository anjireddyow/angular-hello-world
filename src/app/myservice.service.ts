import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  serviceProperty = "Service Created";
  
  constructor() { }

  showTodayDate(){
  	let ndate = new Date();
  	return ndate;
  }
}
