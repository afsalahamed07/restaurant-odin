function createNavElement(text, content, contentParent) {
  const div = document.createElement("div");
  const button = document.createElement("button");
  div.appendChild(button);

  const getDomElement = () => div;

  div.addEventListener("click", () => {
    contentParent.replaceChild(
      content.getDomElement(),
      contentParent.firstChild,
    );
  });

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
    "tracking-wider",
  );

  return { getDomElement };
}

export { createNavElement };
