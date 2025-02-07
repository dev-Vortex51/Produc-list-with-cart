import { createGlobalStyle } from "styled-components";
import RedHatBold from "../../public/RedHatText-Bold.ttf";
import RedHatRegular from "../../public/RedHatText-Regular.ttf";
import RedHatSemiBold from "../../public/RedHatText-SemiBold.ttf";
const GlobalStyles = createGlobalStyle`

:root {
  /* Colors */

  --red: hsl(14, 86%, 42%);
  --green: hsl(159, 69%, 38%);
  --rose-xs: hsl(20, 50%, 98%);
  --rose-sm: hsl(13, 31%, 94%);
  --rose-md: hsl(14, 25%, 72%);
  --rose-lg: hsl(7, 20%, 60%);
  --rose-xl: hsl(12, 20%, 44%);
  --rose-2xl: hsl(14, 65%, 9%);

  /* Font size */
  --font-product-names: 16px;
}

@font-face {
  font-family: "Red Hat Text";
  src: url(${RedHatBold}) format("truetype"),
    url(${RedHatBold}) format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: "Red Hat Text";
  src: url(${RedHatRegular}) format("truetype"),
    url(${RedHatRegular}) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Red Hat Text";
  src: url(${RedHatSemiBold}) format("truetype"),
    url(${RedHatSemiBold}) format("truetype");
  font-weight: 600;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Red Hat Text',sans-serif;
}
body {
  background-color: var( --rose-xs);
}

img {
  width: 100%;
  height: 100%;
}

button {
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
}


.added{
  border: 3px solid var(--red);
}



  .attribution { 
    font-size: 11px; text-align: center;
   }
    .attribution a { 
      color: hsl(228, 45%, 44%);
     }

`;

export default GlobalStyles;
