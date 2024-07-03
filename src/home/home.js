function createHome() {
  const home = document.createElement("div");
  home.id = "home";
  home.classList.add("p-4", "m-auto");

  const title = document.createElement("h1");
  title.textContent = "Welcome to our restaurant!";

  const description = document.createElement("p");
  description.textContent =
    "We serve the best food in town. Come and try our delicious dishes!";

  home.appendChild(title);
  home.appendChild(description);

  let getDomElement = () => home;

  return { getDomElement };
}

export { createHome };
