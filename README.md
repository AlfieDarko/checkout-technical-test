# checkout-technical-test

Checkout.com Frontend Technical Test

[Hosted URL: https://agitated-curie-ce3034.netlify.app/](https://agitated-curie-ce3034.netlify.app/)

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

## Built With

**Javascript
React
PostCSS
Jest
React Testing Library
Sheety.co**

## Technology choices

**Javascript**
I chose this over typescript as for the purposes of a technical test, alongside the descriptions of propTypes in the code, this was sufficient enough to tackle the task at hand.

**React**
Since the job role advertised is for react based frontend development, I found it fitting to use React rather than vanilla JS for this technical test.

**PostCSS**
Most may have reached for SASS but I felt I wanted to be pragmatic and only bring in what I needed. SASS has useful tools like CSS imports, mixins and their own style of CSS variables off the bat but I only really would use the nested CSS syntax.

I like PostCSS for the fact that it starts bare bones and then you can just bring in the parts that you actually need.
If this were a bigger more complicated project, I would have thought about SASS & Styled Components especially, which I really enjoy working on and would have really aided the component based development approach.

In the end, I mostly took the hammer for the nail approach with the technology choices .

**React Testing Library**
I've always been interested in giving it a spin and enjoy a lot of Kent C Dodds content about testing so I thought let me give this a try for this project.
Due to the limited time I had, I wasn't able to use this to its full extent but the experience was positive.
There are some interesting differences between this and enzyme for example which would be great to discuss.

**Sheety.co**
Google sheets to Rest API.
I mostly use this for rapid prototyping when I don't have the leisure of time to spin up a backend & database.
There was a case to use Firebase instead as there are the web security issues that come with using something like Sheety but given this is a technical test for a frontend role, I felt that it was appropriate to use this as long as the position is explained.

I'm 100% aware of the security implication of unauthenticated endpoints from Sheety will raise flags in production development but for a technical test & the issues acknowledged with the time constraints, the tradeoff was worth it.

**No Redux or MobX??**
Since this is a small project, I felt it was a bit overkill to bring in an outside package when React has all the tools to manage application state on the small scale.

I felt it was perfectly appropriate to use the [React Context pattern of state management](https://kentcdodds.com/blog/how-to-use-react-context-effectively/) & it was pleasant to use!

At a previous time I would have reached for the state management tools most react developers are comfortable with ie. Redux but I'm taking the pragmatic approach and only using what is necessary for the task at hand!

## If I Had More Time

There are a few things I wasn't able to complete due to time constraints and balancing my time between other tech-tests and interviews. I've written up about them below.

**ReCharts**
I would have been able to implement the chart part of the site, tallying the ratings from 1-5 stars.
I would have used [ReCharts](http://recharts.org/en-US/) based on React & D3. I quite like its customisable API & I've used it before for more simpler charts.

**Testing**
I would have loved to do more testing. Especially more integration and end-to-end with Cypress. I was quite pressed for time so I done what I can on this side of things.

Perhaps even bring in Storybook for any reusable components I have like Buttons, Form Inputs and infoMessages. That could be overkill for this small task but it gives developers an opportunity to display a reusable component in its use context, visually.

**Star Selection as a rating input**
I felt it would have been way more visually appealing than my current implementation of inputting the value & would have been something I would have implemented had I more time.
I quite like the one from [uber's design system base web](https://baseweb.design/components/rating/) (link).
As someone who enjoys component library work, this would have been fun to work on!

**Data endpoints**
Would have probably thought about moving away from using sheety.co if I weren't pressed for time (dont judge me 😂) to an express & mongo (or even some google cloud functions or lambda's for quick iterations).

**Performance Enhancements**
Lazy Loading only load the comments when in screen.
Perhaps think about a load or see comments button instead of instantly displaying them.

I would have thought about utilizing data pagination from the endpoint to either allow the user to click a button and see more reviews, or just have an infinite scroll that loads the next ten or so more as we scroll down.

Currently all the items are called from the API which is definitely not the most performant when it comes to the user's perspective.

This would have been enjoyable to implement, I'd probably do it in my own time to play around with how I can improve the experience by buffering the results.

**Skeleton Loading:**
Would have been awesome to have some skeleton loading in the beginning so I could create an effect of a seamless loading experience.

I could have the images transition in from a blue or just a skeleton bg and have the same with the reviews below.

**CSS Animations & Interactions**

-Definitely felt I could have done more on this front to add a more interactive user experience & also to have fun playing around with CSS animations & user interaction knowledge

**CSS Organization:**

More Utility Classes, More CSS Variables, CSS @Imports,
I would have utilised more utility classes and organise my CSS a bit better.  
It would be useful to have a Utility Class file with a readme and description of what is available, the naming system etc. These are always useful when developing with CSS using BEM. Things like setting specific margins, setting the display to flex etc. are repeated a lot in all the codebases I've seen.

I would have loved to have done the same with the CSS variables, esp in tokenising them similar to what I've seen in design systems at work & at other companies with a mature design system.
Organising the [8pt spacing system](https://medium.com/swlh/the-comprehensive-8pt-grid-guide-aa16ff402179) into css variables like var(--space-2xl) = 32px for example.. Would have made it easier to make a nice visually conforming website.

It would also be easy for more junior deevlopers to jump in the codebase and feel at ease about making spacing changes as there is a TSHIRT sizing structure to adhere to in terms of spacing, font sizes etc.

**Commit Hooks:**
I could have added some commit hook scripts to lint and run tests on each commit in order to force people to commit working code only. I like that it enforces a code standard and only commiting working code throughout the team.
I've seen implementing this reduce the more obvious bugs

## Acknowledgements

Thanks to the checkout.com team for this opportunity & making it to the end of the README!
