import "./input.css";
import { createNav } from "./nav/nav.js";
import { home } from "./home/home.js";

let body = document.querySelector("body");

body.classList.add("container", "mx:auto", "m-auto", "p-4");

let nav = createNav();
body.appendChild(nav.getDomElement());

// the content of the page
// changes based on the button clicked
// default is home
let content = document.createElement("div");
content.id = "content";
