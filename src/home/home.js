import { createNavElement } from "../components/navElement";

function createHome() {
  let { getDomElement } = createContent();

  let fillCallback = () => {
    console.log("You clicked on Home");
    document
      .getElementById("content")
      .replaceChild(
        getDomElement(),
        document.getElementById("content").firstChild,
      );
  };

  let button = createNavElement("Home", fillCallback);

  return { getDomElement, button };
}

function createContent() {
  const home = document.createElement("div");
  home.id = "home";
  home.classList.add("p-4", "m-auto");

  const title = document.createElement("h1");
  title.classList.add(
    "text-5xl",
    "font-black",
    "p-2",
    "tracking-wide",
    "text-rose-400",
  );
  title.textContent = "Welcome, Fellow Foodie!";

  const description = document.createElement("p");
  description.classList.add("text-2xl", "p-2", "text-gray-600");
  description.textContent = "We serve the food, pleases the Odin";

  home.appendChild(title);
  home.appendChild(description);

  let getDomElement = () => home;

  return { getDomElement };
}

export { createHome };
