function createNavElement(text, callback) {
  let div = document.createElement("div");

  const button = document.createElement("button");
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

  div.addEventListener("click", () => {
    console.log(`You clicked on ${text}`);
    callback();
  });

  return { div, getDomElement };
}

export { createNavElement };
