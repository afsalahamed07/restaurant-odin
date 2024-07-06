import data from "./data.json";

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("p-4");

  const pagination = document.createElement("div");

  pagination.classList.add("flex", "flex-row", "justify-center", "gap-4");

  const previous = document.createElement("button");
  const next = document.createElement("button");
  const page = document.createElement("p");

  previous.textContent = "Previous";
  next.textContent = "Next";
  page.textContent = "1";

  pagination.appendChild(previous);
  pagination.appendChild(page);
  pagination.appendChild(next);

  let currentPage = 1;
  const itemsPerPage = calculateItemsPerPage();

  function calculateItemsPerPage() {
    const itemHeight = 250;
    const availableHeight = window.innerHeight - pagination.offsetHeight - 50;
    return Math.floor(availableHeight / itemHeight);
  }

  function renderMenuPage() {
    menu.innerHTML = ""; // Clear the current items
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = data.menu.slice(start, end);

    for (const item of items) {
      const menuItem = createMenuItem(
        item.title,
        item.description,
        "$" + item.price,
        item.image,
      );
      menu.appendChild(menuItem.getDomElement());
    }

    menu.appendChild(pagination);
    page.textContent = currentPage;
  }

  function updatePagination() {
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === Math.ceil(data.menu.length / itemsPerPage);
  }

  previous.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderMenuPage();
      updatePagination();
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < Math.ceil(data.menu.length / itemsPerPage)) {
      currentPage++;
      renderMenuPage();
      updatePagination();
    }
  });

  window.addEventListener("resize", () => {
    itemsPerPage = calculateItemsPerPage();
    currentPage = 1;
    renderMenuPage();
    updatePagination();
  });

  renderMenuPage();
  updatePagination();

  let getDomElement = () => menu;

  return { getDomElement };
}

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
    "m-4",
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

export { createMenu };
