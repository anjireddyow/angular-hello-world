import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-modeldrivenform',
  templateUrl: './modeldrivenform.component.html',
  styleUrls: ['./modeldrivenform.component.css']
})
export class ModeldrivenformComponent implements OnInit {

  modelDrivenFormData;
  constructor() { }

  ngOnInit() {


  }
  
  onClickSubmitModelForm(data){
  	alert ("Model Driven Form Submitted : Email ID" + data.mEmailId);
  }
}
