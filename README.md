# CSSArchitecturePatternsForNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## An introduction to the problem I'm facing and you're probably facing

I started working with Angular 8 months ago.  My focus immediately shifted to learning more about ES6, RxJs, Typescript and NgRx, not so much Css.  But one day I started to wonder, how does css work in Angular?  I knew I had to write my styles in my component folder, but I didn't know why I had to do it that way.  Back then my client didn't care much about managing styles on the project, he would let Boostrap take care of it all and if there was any custom css to be written, well, overwrite what you need to overwrite and that's it, there wasn't much time to spare anyway.

And it was just css after all...

It bugged me, having to work with css without a real mission.  I was raised to care a lot about css.

So I started looking into how Angular manages css styles and I found some pretty awesome stuff like View Encapsulation.

View Encapsulation is a way to mimic Shadow Dom, where you can add styles to a custom element blocking global styles from interfering with it.  And that means I can do whatever I want and it won't matter since it won't conflic with other global styles or component styles.  Easy and powerful!  No more problems with classes overriding clases overriding tag selectors overriding my :hover styles.

Well, not so easy and not so powerful.

As I started to understand more and more about css in Angular apps, I realized that even though Angular provides plenty of options to work with css, we continue to make the same old mistakes:
* We still are overlooking how much impact css has on our app's performance.
* We think that by just using a naming convention our scalability and debuggability issues are solved.
* We continue ignoring specificity.
* We think that using a css framework (think Bootstrap) solves the need to think about css architecture.  

Before working in my first project with Angular 4 I worked with a team that had an stablished set of standards that allowed for creating very neat css and scss files.  This team was concerned about scalability, performance, debuggability, specificity, reusability and consistency.  Consistency was probably the biggest concern on our list.  It wasn't just about how the view would render and look like, we were also very concerned about the high turnover that existed at the company.  One day a developer was in the project, the next week he would be moved onto another project, fast forward 1 month and he'd be back with us, but this time he would find that 2 new devs were added to the team.  How could we guarantee that from his first commit, the css he wrote would comply with our stablished norms?  And how could we guarantee that a new developer wouldn't spend a lot of time understanding how we wanted to write the css and why we wanted to write it that way?  Consistency is difficult, but we managed it.

There were a lot of lessons from this team that I really want to implement into my Angular app's css architecture.  I'll go through some basic topics first that will create our bedrock to continue scalating until we manage to create a complete set of practices that will turn your css styles into one of the strengths of your app.

Let's create our css knowledge bedrock.  These are the topics we'll touch:
* How does css work in the browser
  - Repaints and Reflows
  - DOM Tree vs Render Tree
  - Layout, Paint, Composite
* Specificity
  - The specificity wars
  - How does selector matching work in the browser
* Angular css styling
  - Global scope
  - View Encapsulation

That looks like a lot to cover but trouble not, we won't go deep into each, though I'll provide links to articles that I personally recommend if you want to learn much more.

So after laying our very solid foundation of css concepts, we'll go through a list of best practices that will improve the performance of our app:
- What styles should be global
- What styles should be encapsulated
- How to manage css from vendors
- ITCSS for Angular Apps


