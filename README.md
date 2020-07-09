# checkout-technical-test

Checkout.com Frontend Technical Test

[Hosted URL: https://agitated-curie-ce3034.netlify.app/](https://agitated-curie-ce3034.netlify.app/)

## Task

The task was to build a simple page where you can post a comment and view the comments posted.

## Pen & Paper Super Rough Wireframe

| <a href="https://ibb.co/WkyLRxn">Screen 1</a> |
<a href="https://ibb.co/jZNWmj1">Screen 2</a> |
<a href="https://ibb.co/K62KSGg">Screen 3</a> |

## Screenshots

| <a href="https://ibb.co/hyy3Rx2">Desktop Screen</a> |
<a href="https://ibb.co/wM6QXpF">Tablet Screen</a> |
<a href="https://ibb.co/0KpCQgN">Mob Screen</a> |

## Prerequisites

- NPM (or Yarn)

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com/)

Or alternatively, you can install Yarn instead of NPM

- [Yarn](https://yarnpkg.com/)

## Installing

After making sure you have all the **prerequisites** above,

- Open your command line or terminal app
- Run the respective command below to install the app locally

**NPM users:**
`npm install`

**Yarn users:**
`yarn`

## Running Tests

**To run the jest tests:**
**NPM:**
`npm run test`

**Yarn:**
`npm test`

**To run the lint tests:**
**NPM:**
`npm run lint`

Yarn:
`yarn lint`

## Build

**To run the build script with linting & tests:**

**NPM:**

`npm run build`

**Yarn:**

`yarn build`

**To run the build script only:**

**NPM:**

`npm run deploy`

**Yarn:**

`yarn deploy`

## Built With

- **Javascript**
- **React**
- [**PostCSS**](https://postcss.org/)
- [**React-Hook-Forms**](https://react-hook-form.com/)
- [**Jest**](https://jestjs.io/en/)
- [**React Testing Library**](https://testing-library.com/)
- [**Webpack**](https://webpack.js.org/)
- [**Sheety.co**](https://sheety.co)
- [**Netlify**](https://netlify.com)

## Technology choices

### Javascript

I chose this over typescript as for the purposes of a technical test, alongside the descriptions of propTypes in the code, this was sufficient enough to tackle the task at hand.

### **React**

Since the job role advertised is for react based frontend development, I found it fitting to use React rather than vanilla JS for this technical test.

Since the page is mostly static, there's definitely the argument that I could have used Next.js to get up & running too.

### **PostCSS**

While SASS is more popular as the swiss army knife of CSS, I wanted to be pragmatic about what I needed.

SASS has some powerful features that come with it like mixins & their own style of CSS variables.
When I scoped the task, I saw that I only really needed few features I found useful like nesting.

Standard CSS Variables are now well supported (with polyfills to ie9 if the declarations are in :root)
It also allows me to start basic and bring in the bits I need.

If this were a slightly or bigger more complicated project, I definitely would have thought about Styled Components especially as it's really enjoyable to work with, easy for more junior team members to pick up and jump into as the styles are compartmentalised and no BEM knowledge is required (making abit CSS less scary).

In the end, I mostly took the hammer for the nail approach with the technology choices given the small size of the task & the simplicity of the codebase and components required.

### **React Testing Library**

I've always been interested in giving it a spin and enjoy a lot of Kent C Dodds content about testing so I thought let me give this a try for the first time in this project.

Due to the limited time I had, I wasn't able to use this to its full extent but the experience was positive & I really liked that they encouraged testing from the viewpoint of the user.

Its good that they encouraged using data attributes for testing rather than CSS classes or ID's which is something more teams should pick up. using CSS Class Names and ID's just to select components to test can change for innocent reasons making for quite brittle testing.

There were some issues testing things where I would have been able to test things easily w/ enzyme but I put that down to teething pains of using new technology. Hence some missing tests.

### **Sheety.co**

Google sheets to Rest API.
I mostly use this for rapid prototyping when I don't have the leisure of time to spin up a backend & database.
(Another great tool for setting up prototype REST APIs > [https://github.com/typicode/json-server](https://github.com/typicode/json-server) )

There was a case to use Firebase instead as there are the obvious web security issues that come with using something like Sheety but given this is a technical test for a frontend role, I felt that it was appropriate to use this as long as the position is explained.

I'm definitely 100% aware of the security implication of unauthenticated endpoints from Sheety will raise flags in production development but for a technical test & the issues acknowledged, also with the time constraints I had on this, the tradeoff was necessary.

### **React Form Hooks**

I've used React Form Hooks to handle the form validation and workings. I felt the API was nice and simple & I have used it previously with great effect.
I considerered the other options and looked quite extensively at [Formik](https://www.formik.org) which was quite advanced in its toolset but for a simple technical task, I felt React Form Hooks was more than capable of handling what I scoped out.

### **No Redux or MobX??**

I felt it was overkill to bring in an outside package for state management given the small size of the task.
This gave me the perfect opportunity to finally try out the [React Context & hooks pattern of state management](https://kentcdodds.com/blog/how-to-use-react-context-effectively/) & it was pleasant to use!

There are some questions about how it would scale if this app was to be expanded on a larger scale but given it uses much of the same paradigms such as reducers, actions etc. deprecating it for the standard Redux work flow would be a low effort task.

MobX may have been an alternative but for a small project, the gains of bringing in a package to manage quite simple app state would be quite negligable.

## If I Had More Time

There are a few things I wasn't able to complete due to time constraints and balancing my time between other tech-tests and interviews. I've written up about them below.

### **ReCharts**

I would have been able to implement the chart part of the site, tallying the ratings from 1-5 stars.
I would have used [ReCharts](http://recharts.org/en-US/) based on React & D3. I quite like its customisable API & I've used it before for more simpler charts.

### **Testing**

I would have loved to do more testing. Especially more integration and end-to-end with Cypress. I was quite pressed for time so I done what I could given my constraints.

Getting to grips with using React Testing Library for the first time meant I didn't have enough time to tackle their way of testing some scenarios

### **Star Selection as a rating input**

I felt it would have been way more visually appealing than my current implementation of inputting the value & would have been something I would have implemented had I more time.
I quite like the one from [uber's design system base web](https://baseweb.design/components/rating/) (link).

### **Data endpoints**

I would have thought about moving away from sheety.co as an endpoint for the data requests and gone with some simple serverless functions.

### **Performance Enhancements**

One thing I would have liked to implement was Lazy Loading comments as they appear on the screen via an infinite scroll solution.
I could have given much more thought about scenarios where the comments are very numerous and all the images that would have to load for all those Feedback Card components. Definitely not the most performant thing I could have done.

Perhaps I could have gone with 10 comments on the initial call (or none at all) & have gone with a button that says see more reviews.
Every click could have loaded 10 more, saving user bandwith by reducing unneeded large request payloads

I could have also thought about utilizing data pagination from the endpoint to either allow the user to click a a next page button to see more reviews.

This would have been enjoyable to implement, I'd probably do it in my own time to play around with how I can improve the experience by buffering the results.

### **Skeleton Loading:**

Would have been awesome to have some skeleton loading in the beginning so I could create an effect of a seamless loading experience.

I could have the images transition in from a blue or just a skeleton bg and have the same with the reviews below.

### **CSS Animations & Interactions**

-Definitely felt I could have done more on this front to add a more interactive user experience & also to have fun playing around with CSS animations & user interaction knowledge

### **CSS Organization:**

More Utility Classes, More CSS Variables, CSS @Imports,
I would have utilised more utility classes and organise my CSS a bit better.  
It would be useful to have a Utility Class file with a readme and description of what is available, the naming system etc. These are always useful when developing with CSS using BEM. Things like setting specific margins, setting the display to flex etc. are repeated a lot in all the codebases I've seen.

I would have loved to have done the same with the CSS variables, esp in tokenising them similar to what I've seen in design systems at work & at other companies with a mature design system.
Organising the [8pt spacing system](https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179) into css variables like var(--space-2xl) = 32px for example.. Would have made it easier to make a nice visually conforming website.

It would also be easy for more junior deevlopers to jump in the codebase and feel at ease about making spacing changes as there is a TSHIRT sizing structure to adhere to in terms of spacing, font sizes etc.

### **Commit Hooks:**

I could have added some commit hook scripts to lint and run tests on each commit in order to force people to commit working code only. I like that it enforces a code standard and only commiting working code throughout the team.
I've seen implementing this reduce the more obvious bugs

### **Form Input Validation**

I would have went in and done some more form validation, esp for things like minimum and max inputs.
Could I have had a swearword filter or used some npm plugin?

## Acknowledgements

Thanks to the checkout.com team for this opportunity & making it to the end of the README!
