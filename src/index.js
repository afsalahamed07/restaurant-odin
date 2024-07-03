import "./input.css";
import { createNav } from "./nav/nav.js";
import { createHome } from "./home/home.js";

let body = document.querySelector("body");

body.classList.add(
  "container",
  "mx:auto",
  "m-auto",
  "p-4",
  "flex",
  "flex-col",
  "h-screen",
  "font-mono",
);

let nav = createNav();
body.appendChild(nav.getDomElement());

// the content of the page
// changes based on the button clicked
// default is home
let content = document.createElement("div");
content.id = "content";
content.classList.add("p-4", "flex", "flex-col", "grow");
body.appendChild(content);

const home = createHome();

function fillContent(component) {
  content.appendChild(home.getDomElement());
}

fillContent(home);
