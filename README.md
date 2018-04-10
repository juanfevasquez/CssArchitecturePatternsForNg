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


# CSS Bedrock Concepts

## Repaint and Reflow

Let's start with repaint.  Think of a box filled with white color, then click on a button and the box changes its fill color to red.  We have changed the appearance not the structure.  The browser has to parse the whole render tree to verify what has changed.  This is called a repaint, it is expensive and one of the things we should be careful about.

We are now instructing the same button to not only change the appearance but also the height of the box.  Here the browser not only checks for visibility changes but also structure changes.  A reflow happens.
Reflow of just 1 element causes the automatic reflow of all its children AND its ancentors.

Avoiding reflows is not impossible but it is really really difficult, so we should aim to minimize its impact.  How?

### Change classes as low in the DOM tree as possible:
Reflows can be top-down or bottom up.  They are unavoidable, but we can reduce its impact.
Change classes as low in the DOM tree as possible and thus limit the scope of the reflow to as few nodes as possible.
For example: Avoid changing a class on wrapper elements.  OOCSS always attempts to attach classes to the Dom node they affect, but in this added case it has the added performance benefit of minimizing the impact of reflows.
Hence the importance of naming conventions like Bliss CSS, where we trade cleanliness for performance since we name with a class every single element in the DOM.

### Avoid setting multiple inline css styles
Setting styles via the style attribute cause reflows.  If we add multiple inline styles, a reflow is performed for each style.  If we combine the changes in one class, only 1 reflow is caused.

### Apply animations with position fixed or absolute
Elements positioned fixed or absolute don't affect other elements, so they will cause more of a repaint rather than a reflow. Muuuuuch less costly.

### Trade smoothness for speed
For each pixel we are animating, we are generating a reflow.  So this is quite costly for the browser and the machine's CPU.  Moving the animated element 3px at a time the animation might not look as smooth, but for mobile devices, it will be an awesome relief.

## DOM Tree vs Render Tree

When the browser gets an html document, it creates a bunch of nodes.  These nodes represent an html element and the whole representation of the html document in nodes is called the DOM Tree.
But then comes the CSS.  Here the browser combines the DOM with the CSS, and this combination is called the Render Tree.  The Render Tree is very similar to the DOM Tree, except it doesn't include the head or script nodes and also, if there is an element set to display: none, this element won't make part of the Render Tree either.  Also, if one element has a pseudo element like ::after, this pseudo element is added to the Render Tree but it isn't part of the DOM.

## Layout, Paint, Composite

After the browser has created the DOM Tree and later knows what css rules apply to each element (Render Tree), the browser starts to calculate layout: how much space an element takes on screen.  So in a graphical way of thinking, each node in the render tree becomes a box.

### Paint

Next is a process called vector to raster.  The boxes made in the previous process are vectors, but then they are turned into pixels.  This process is called paint.

### Composite

For painting a complete website, the browser uses different layers.  One layer could be a button, another layer the label (text) that sits on top of the button.  This process where the browser paints the elements on separate layers is called composite.
The composite process requires the power of the CPU.  Once the whole picture is ready, it is passed to the GPU so it can be presented to the screen.


