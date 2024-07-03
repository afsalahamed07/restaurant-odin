import { createMenuButton } from "./menu.js";
import { createHomeButton } from "./home.js";
import { createAboutButton } from "./about.js";

function createNav() {
  let nav = document.createElement("nav");
  nav.classList.add("flex", "items-center", "justify-center", "p-4", "gap-4");

  let homeButton = createHomeButton();
  let menuButton = createMenuButton();
  let aboutButton = createAboutButton();

  nav.appendChild(homeButton.getDomElement());
  nav.appendChild(menuButton.getDomElement());
  nav.appendChild(aboutButton.getDomElement());

  const getDomElement = () => nav;

  return Object.assign(
    {},
    { homeButton, menuButton, aboutButton },
    { getDomElement },
  );
}

export { createNav };
