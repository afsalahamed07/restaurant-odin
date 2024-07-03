function createNavElement(text) {
  let div = document.createElement("div");

  let button = document.createElement("button");
  button.textContent = text;

  button.classList.add(
    "nav-element",
    "bg-red-100",
    "hover:bg-red-600",
    "hover:text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  );

  div.appendChild(button);

  const getDomElement = () => div;

  return { div, getDomElement };
}

export { createNavElement };
