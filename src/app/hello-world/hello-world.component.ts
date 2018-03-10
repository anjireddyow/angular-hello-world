//The import statement defines the modules we want to use to write our code. Here we’re importing two things: Component, and OnInit. 
// We import Component from the module "@angular/core". The "@angular/core" portion tells our program where to find the dependencies 
// that we’re looking for. In this case, we’re telling the compiler that "@angular/core" defines and 
// exports two JavaScript/TypeScript objects called Component and OnInit
import { Component, OnInit } from '@angular/core';

// @Component is called decorators. Decorators are metadata added to our code
@Component({
  selector: 'app-hello-world', // selector name will be used for adding "hello-world-component" as a tag/directive in the another component html files
  templateUrl: './hello-world.component.html',  // Html file location for this hello-world component
  styleUrls: ['./hello-world.component.css'] // Style file location for this hello-world component. Angular uses a concept called “style-encapsulation” which means that styles specified for a particular component only apply to that component.
  // template: '<p> hello-world works inline! </p>', // template will be used to directly insert html code in ts file
  // style: 'font : blue' // style will be used to directly insert css styles in ts file

})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
