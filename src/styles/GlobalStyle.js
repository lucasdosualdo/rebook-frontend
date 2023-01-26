import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*,
*::after,
*::before {
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: rgb(204, 204, 204);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background: rgb(0, 33, 65);
}
.nav-brand {
  text-transform: uppercase;
}

/* .nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3rem;
} */
.nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
    position: fixed;
    top: 7vh;
    right: 0;
    height: 93vh;
    width: 50vw;
    background: rgb(0, 33, 65);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
  }


/* .nav-toggler {
  display: none;
} */
.nav-toggler {
    display: block;
    cursor: pointer;
  }

.nav-toggler div {
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  background: rgb(204, 204, 204);
  transition: 0.3s ease-in;
}

/* @media screen and (max-width: 768px) {
  .nav-toggler {
    display: block;
    cursor: pointer;
  }
  .nav-menu {
    position: fixed;
    top: 7vh;
    right: 0;
    height: 93vh;
    width: 50vw;
    background: rgb(0, 33, 65);
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.5s ease-in;
  }
} */
/* Active Class */
.nav-active {
  transform: translateX(0%);
}

/* Toggle Icon Animation */

.toggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}


`;

export default GlobalStyle;