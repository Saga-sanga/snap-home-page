# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

When creating this project I had a lot of practice using CSS grid; the alignment of elements and using gap, using CSS variables, CSS selectors and the CSS pseudo class :not()

```css
/* Rearrange element columns */
main.grid > *:first-child {
  grid-column: 2/3;
}

main.grid > *:last-child {
  grid-column: 1/2;
  grid-row: 1/2;
}

/* Hover and focus states LoL */
.side-menu > ul:first-child > li:not(:first-child):not(:nth-child(2)):hover,
.side-menu > ul:nth-child(2) > li:hover,
.side-menu ul:first-child li:first-child > span:hover,
.side-menu ul:first-child li:nth-child(2) > span:hover,
.side-menu ul:first-child li:first-child  li:hover,
.side-menu ul:first-child li:nth-child(2)  li:hover,
.side-menu > ul:first-child > li:not(:first-child):not(:nth-child(2)):focus,
.side-menu > ul:nth-child(2) > li:focus,
.side-menu ul:first-child li:first-child > span:focus,
.side-menu ul:first-child li:nth-child(2) > span:focus,
.side-menu ul:first-child li:first-child  li:focus,
.side-menu ul:first-child li:nth-child(2)  li:focus {
  color: hsl( var(--clr-almost-black) );
}
```

### Useful resources

- [Mozilla Developer Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) - This came in helpful to exclude certain elements in an otherwise general selector.

## Author

- GitHub - [Saga-sanga](https://github.com/Saga-sanga)
- Frontend Mentor - [@Saga-Sanga](https://www.frontendmentor.io/profile/Saga-sanga)
- Twitter - [@RecksonKhiangte](https://twitter.com/RecksonKhiangte)

