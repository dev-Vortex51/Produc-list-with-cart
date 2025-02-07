# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product list with cart solution](#frontend-mentor---product-list-with-cart-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub](https://github.com/dev-Vortex51/Produc-list-with-cart)
- Live Site URL: [Vercel](https://produc-list-with-cart.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- -[TypeScript](https://www.typescriptlang.org/)

### What I learned

Using styled-components and global styles helped me maintain consistency across the project by defining reusable CSS variables in the :root selector. This approach made it easy to manage colors, fonts, and other styling properties throughout the application. For example, I structured my global styles as follows:

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: hsl(14, 86%, 42%);
    --background-light: hsl(20, 50%, 98%);
  }

  body {
    background-color: var(--background-light);
    font-family: 'Red Hat Text', sans-serif;
  }
`;

export default GlobalStyles;
```

### Continued development

One area I want to continue focusing on in future projects is state management and performance optimization in React. While using the Context API for managing the cart state worked well, I want to explore more advanced solutions like Redux Toolkit or Zustand for better scalability. Additionally, optimizing re-renders using useMemo, useCallback, and React.memo is something I aim to refine. For example, using useCallback to prevent unnecessary re-renders in event handlers:

### Useful resources

- [Styled Components](https://styled-components.com/)

## Author

- Website - [Dev-Vortex](https://github.com/dev-Vortex51)
- Frontend Mentor - [@dev-Vortex51](https://www.frontendmentor.io/profile/dev-Vortex51)
- Twitter - [@belloqu44401095](https://x.com/belloqu44401095)
