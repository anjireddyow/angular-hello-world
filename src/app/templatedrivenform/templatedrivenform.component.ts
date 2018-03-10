import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
 
 @ViewChild('userLogin') userLoginForm:NgForm;

  defaultEmailId = "test.com";
  genders = ['male','female'];
  constructor() { }

  ngOnInit() {
  }

  onClickUserLoginForm(data){
	alert("Email ID:" + data.emailid + ": Password :" + data.password);
	console.log(this.userLoginForm);

	// Reset the form
	this.userLoginForm.reset();
}

suggestUserName(){
	const suggestedEmail = "Superemail@email.com";

    // setValue is used to set values for the entire form. Not better approach

	/*
	this.userLoginForm.setValue({
		userData: {
emailid: suggestedEmail,
password: 'Default Password',
gender: 'female'
		}
	}) 
	*/
	

	// form.patchValue is used to set values for parts of the form
	
	this.userLoginForm.form.patchValue({
		userData: {
			emailid: "sdfsdf@tes.com"
		}
	})
	
}
}
