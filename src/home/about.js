function createAbout() {
  const about = document.createElement("div");
  about.id = "about";
  about.classList.add("p-4", "m-auto");

  const title = document.createElement("h1");
  title.classList.add(
    "text-5xl",
    "font-black",
    "p-2",
    "tracking-wide",
    "text-rose-400",
  );
  title.textContent = "Bit About Odin";

  const description = document.createElement("p");
  description.classList.add("text-2xl", "p-2", "text-gray-600");
  description.textContent = "This is about Page";

  about.appendChild(title);
  about.appendChild(description);

  let getDomElement = () => about;

  return { getDomElement };
}

export { createAbout };
