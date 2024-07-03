import { createNavElement } from "../components/navElement.js";

function createHomeButton(fillCallBack) {
  let button = createNavElement("Home", fillCallBack);

  return Object.assign({},  button );
}

export { createHomeButton };
