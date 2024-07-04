import "./input.css";
import { createNav } from "./nav/nav.js";
import { createHome } from "./home/home.js";
import { createAbout } from "./home/about.js";

import { createNavElement } from "./components/navElement.js";

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

let contentParent = document.createElement("div");

let home = createHome();
let about = createAbout();
let menu = {
  getDomElement: () => {
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.textContent = "This is menu Page";
    return menu;
  },
};

let homeButton = createNavElement("Home", home, contentParent);
let menuButton = createNavElement("Menu", menu, contentParent);
let aboutButton = createNavElement("About", about, contentParent);

let nav = createNav(homeButton, menuButton, aboutButton);
body.appendChild(nav.getDomElement());

// the content of the page
// changes based on the button clicked
// default is home
contentParent.id = "content";
contentParent.classList.add("p-4", "flex", "flex-col", "grow");
body.appendChild(contentParent);

function fillContent(component) {
  contentParent.appendChild(home.getDomElement());
}

fillContent(home);
