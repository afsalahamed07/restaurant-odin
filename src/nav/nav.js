import { createMenuButton } from "./menu.js";
import { createHomeButton } from "./home.js";
import { createAboutButton } from "./about.js";

import { createHome } from "../home/home.js";
import { createAbout } from "../home/about.js";

function createNav() {
  let nav = document.createElement("nav");
  nav.classList.add("flex", "items-center", "justify-center", "p-4", "gap-4");

  let home = createHome();
  let about = createAbout();

  let homeButton = home.button;
  let menuButton = createMenuButton();
  let aboutButton = about.button;

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
