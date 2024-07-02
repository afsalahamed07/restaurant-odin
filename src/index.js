import { createNav } from "./nav";

console.log("index.js");

function createContent() {
  let div = document.createElement("div");
  div.innerHTML = "This is the content";

  return div;
}

document.body.appendChild(createContent());

createNav();
