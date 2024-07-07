function createMenuItem(titleText, descriptionText, priceText, imageSrc) {
  const menuItem = document.createElement("div");

  const imageDiv = document.createElement("div");
  const textDiv = document.createElement("div");

  menuItem.appendChild(imageDiv);
  menuItem.appendChild(textDiv);

  const title = document.createElement("h1");
  const description = document.createElement("p");
  const price = document.createElement("p");
  const image = document.createElement("img");

  const getDomElement = () => menuItem;

  imageDiv.appendChild(image);
  textDiv.appendChild(title);
  textDiv.appendChild(description);
  textDiv.appendChild(price);

  title.textContent = titleText;
  description.textContent = descriptionText;
  price.textContent = priceText;
  image.src = imageSrc;

  menuItem.classList.add(
    "flex",
    "flex-row",
    "p-4",
    "shadow-md",
    "rounded-md",
    "gap-4",
  );
  textDiv.classList.add("flex", "flex-col", "gap-3", "px-4")
  imageDiv.classList.add("basis-40", "flex-none");
  image.classList.add("h-40", "rounded-md", "overflow-hidden", "m-auto");
  title.classList.add(
    "text-2xl",
    "font-bold",
    "text-rose-400",
    "tracking-wide",
  );
  description.classList.add("grow", "text-pretty", "text-lg");

  return { getDomElement };
}

export { createMenuItem };
