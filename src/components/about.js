function createAbout() {
  const about = document.createElement("div");
  about.id = "about";
  about.classList.add("p-4", "m-auto", "flex", "flex-col", "gap-4");

  const title = document.createElement("h1");
  title.classList.add(
    "text-5xl",
    "font-black",
    "p-2",
    "tracking-wide",
    "text-rose-400",
  );
  title.textContent = "About Odin Restourant";

  const description = document.createElement("p");
  description.classList.add("text-xl", "p-2", "text-pretty", "tracking-wide");
  description.textContent =
    "The Odin Restourant is a place where you can enjoy the best food in the world. We have the best chefs in the world who can cook any dish you want. We have a wide range of dishes from all over the world. We have the best service in the world. We have the best atmosphere in the world. We have the best customers in the world. We have the best everything in the world. We are the best in the world. We are the Odin Restourant.";

  about.appendChild(title);
  about.appendChild(description);

  let getDomElement = () => about;

  return { getDomElement };
}

export { createAbout };
