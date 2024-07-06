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
  textDiv.classList.add("flex", "flex-col", "gap-2", "p-2");
  image.classList.add("w-40", "h-40", "rounded-md", "mx-4");
  title.classList.add(
    "text-2xl",
    "font-bold",
    "text-rose-400",
    "tracking-wider",
    "py-2",
  );
  textDiv.classList.add("text-lg", "text-gray-600", "tracking-wide");

  return { getDomElement };
}

export { createMenuItem };
