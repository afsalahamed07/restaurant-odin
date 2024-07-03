import { createNavElement } from "../components/navElement.js";

function createAboutButton() {
  let button = createNavElement("About");

  return Object.assign({}, button);
}

export { createAboutButton };
