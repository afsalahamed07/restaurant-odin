import { createNavElement } from "../components/navElement.js";

function createHomeButton() {
  let button = createNavElement("Home");

  return Object.assign({},  button );
}

export { createHomeButton };
