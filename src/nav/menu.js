import { createNavElement } from "../components/navElement.js";

function createMenuButton() {
  let button = createNavElement("Menu");

  return Object.assign({}, button);
}

export { createMenuButton };
