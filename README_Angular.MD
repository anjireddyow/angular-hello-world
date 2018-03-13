Every app has a main entry point. This application was built using Angular CLI (which is built on a tool called Webpack). We run this app by calling the command:

-------------------------------------------
1 ng serve
ng will look at the file .angular-cli.json to find the entry point to our app. Let’s trace how ng finds the components we just built.

At a high level, it looks like this:
• .angular-cli.json specifies a "main" file, which in this case is main.ts
• main.ts is the entry-point for our app and it bootstraps our application
• The bootstrap process boots an Angular module – we haven’t talked about modules yet, but we will in a minute
• We use the AppModule to bootstrap the app. AppModule is specified in src/app/app.module.ts
• AppModule specifies which component to use as the top-level component. In this case it is AppComponent
• AppComponent has <app-user-list> tags in the template and this renders our list of users.


• <input name="title" #newtitle> 

	This input markup tells Angular to bind this <input> to the variable newtitle. The #newtitle syntax
	is called a resolve. The effect is that this makes the variable newtitle available to the expressions
	within this view.
	newtitle is now an object that represents this input DOM element (specifically, the type is
	HTMLInputElement). Because newtitle is an object, that means we get the value of the input tag
	using newtitle.value.

•  Binding actions to events

	On our button tag we add the attribute (click) to define what should happen when the button is
	clicked on. When the (click) event happens we call addArticle with two arguments: newtitle
	and newlink.

	

	
// Steps for understanding application

1. Go through Anji_README.txt file 
2. Go through angular-hello-world app

------------------- angular-hello-world app ---------------------
3. Go through "app.module.ts" file for more description and undersanding
4. Next go through "user-item.component.ts,user-item.component.html" description
5. Next go through "user-list.component.ts, user-list.component.html" description


// Steps for creating angular application

1. Breakdown your wireframe/user interface in to logical components (like header, footer, main page etc)
2. 
