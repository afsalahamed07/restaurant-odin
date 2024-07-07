function createNav(homeButton, menuButton, aboutButton) {
  let nav = document.createElement("nav");
  nav.classList.add("flex", "items-center", "justify-center", "pt-4", "gap-4");

  nav.appendChild(homeButton.getDomElement());
  nav.appendChild(menuButton.getDomElement());
  nav.appendChild(aboutButton.getDomElement());

  const getDomElement = () => nav;

  return { getDomElement };
}

export { createNav };
