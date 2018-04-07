# CSSArchitecturePatternsForNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

I started working with Angular 8 months ago.  Before that I used to work with a team that had an stablished set of standards that allowed for creating very neat css and scss files.  This team was concerned about scalability, performance, debuggability, specificity, reusability and consistency.  Consistency was probably the biggest concern on our list.  It wasn't just about how the view would render and look like, we were also very concerned about the high turnover that existed at the company.  One day a developer was in the project, the next week he would be moved onto another project, fast forward 1 month and he'd be back with us, but this time he would find that 2 new devs were added to the team.  How could we guarantee that from his first commit, the css he wrote would comply with our stablished norms?  And how could we guarantee that, no matter how new you were to the team, a new developer wouldn't spend a lot of time understanding how we wanted to write the css and why we wanted to write it that way?  Consistency is difficult, but we managed it.

So back to the present, I'm working with Angular and the thing is that there's something called View Encapsulation where the css you write in a component is encapsulated, meaning if you have a component called A and a component called B, and both have a class named .title, they won't interfere.  Awesome!

You know, View Encapsulation is a way to mimic Shadow Dom, where you can add styles to a custom element and global styles won't interfere with it.  Cool, that means, I can do whatever I want and it won't matter since it won't conflic with other global styles or component styles.

Well, no.

And that's an opinion I think is shared across a large group of developers who haven't had the opportunity to sit and learn how css work and how it can greatly affect the performance of your app or the sanity of your entire team.

## But BEM solves everything...

Naming conventions are great. They solve 2 big problems:
* How you name your classes and selectors: it is a nightmare when you go through legacy code and find classes like **.curated-list** or **largeTitle-1**.  What does curated really mean or how many large titles are there?  Naming conventions solve this first by giving some structure to what your classes' names are, improving semantics greatly.
* Performance: do you have any idea how hard it is for the JIT compiler to read this selector? **section ul > li > a.highlighted**  When we use only classes for selectors we improve the performance of the JIT compiler since it takes less effort to find **.list_item--highlighted-item** than the previous example.  I'll give some more details about how this works, but I won't go deep into the matter.  If you want to find out more about how css selectors affect performance then check [this video](https://youtu.be/DY_Glzs3Prc).