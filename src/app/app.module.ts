// Contains all the imports of the modules from angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Template Driven Form import
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
// Template Driven Form imports FormsModule, NgModule, NgGroup for grouping the all the form elements
// Template Driven means all the form code will be written in html (template)
import { FormsModule } from '@angular/forms'; 
// Model Driven Form imports ReactiveFormsModule, NgModule, FormGroup and FormControl
// Model Driven Form means all the form code will managed in the class file (ts file)
import { ReactiveFormsModule } from '@angular/forms';

// Contains all the imports of Components, directives
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { NewComponentComponent } from './new-component/new-component.component';
import { MyserviceService } from './myservice.service';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ModeldrivenformComponent } from './modeldrivenform/modeldrivenform.component';

// Angular has a powerful concept of modules. When you boot an Angular app, you’re not booting a component directly, 
// but instead you create an NgModule which points to the component you want to load.
// The first thing we see is an @NgModule decorator. Like all decorators, this @NgModule( ... ) code adds metadata to the
// class immediately following (in this case, AppModule).
// Our @NgModule decorator has four keys: declarations, imports, providers, and bootstrap.

// Module in Angular refers to a place where you can group the components, directives, pipes, and services, which are related to the application.
@NgModule({

  // declarations specifies the components that are defined in this module.
  // You have to declare components in a NgModule before you can use them in your templates.
  // You can think of an NgModule a bit like a “package” and declarations states what components are “owned by” this module.
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    ChangeTextDirective,
    SqrtPipe,
    NewComponentComponent,
    TemplatedrivenformComponent,
    ModeldrivenformComponent  
  ],
  // imports describes which dependencies this module has. We’re creating a browser app, so we want to import the BrowserModule.
  
  // ------------------ import vs. imports? -----------------------
  // You might be asking the question, “What’s the difference between importing a class at the top of the file and putting a 
  // module in imports?”
  //The short answer is that you put something in your NgModule’s imports if you’re going to be using it in your templates or 
  // with dependency injection. We haven’t talked about dependency injection, but rest assured, we will.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path: 'new-cmp',
      component : NewComponentComponent
    }
    ])
  ],

  // providers is used for dependency injection. So to make a service available to be injected throughout
  // our application, we will add it here.
  providers: [MyserviceService],

  // bootstrap tells Angular that when this module is used to bootstrap an app, we need to load the
  // AppComponent component as the top-level component.
  bootstrap: [AppComponent]
})
export class AppModule { 


}
