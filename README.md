# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [live site URL](https://newsletter-sign-up-with-success-message-zeta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I need to learn how to switch between mobile and desktop versions of images when appropriate. This would be simple to do in react - but can I achieve this with basic css? or html?...lets investigate

I have learned that you can do the following to switch between mobile and desktop versions of your images. 
```html
<picture>
  <source media='(max-width: 600px)' srcSet='path-to-mobile-image'>
  <img src='path-to-desktop-image'/>
</picture>
```

## Author

- Website - [lonewolfcode](https://www.lonewolfcode.com)
- Frontend Mentor - [@CodeCraftsmanReact](https://www.frontendmentor.io/profile/CodeCraftsmanReact)



