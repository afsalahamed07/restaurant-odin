import data from "../data.json";
import { createPagination } from "./pagination";
import { createMenuItem } from "./item";

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("flex", "flex-col", "grow");

  const menuItems = document.createElement("div");
  menuItems.classList.add(
    "flex",
    "flex-col",
    "gap-5",
    "justify-center",
    "grow",
  );

  menu.appendChild(menuItems);

  let itemsPerPage = calculateItemsPerPage(); // changes based on window size
  const pagination = createPagination(data.menu.length, itemsPerPage, renderMenuPage);

  menu.appendChild(pagination.getDomElement());

  function calculateItemsPerPage() {
    const itemHeight = 250;
    const availableHeight = window.innerHeight - 100;
    return Math.floor(availableHeight / itemHeight);
  }

  function renderMenuPage() {
    menuItems.innerHTML = ""; // Clear the current items
    const start = (pagination.getCurrentPage() - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = data.menu.slice(start, end);

    for (const item of items) {
      const imageReq = require(`../../assets/images/${item.image}`);

      const menuItem = createMenuItem(
        item.title,
        item.description,
        "$" + item.price,
        imageReq,
      );
      menuItems.appendChild(menuItem.getDomElement());
    }
  }

  window.addEventListener("resize", () => {
    itemsPerPage = calculateItemsPerPage();
    pagination.setPage(1);
    pagination.setItemsPerPage(itemsPerPage);
    pagination.updatePagination();
    renderMenuPage();
  });

  renderMenuPage();
  pagination.updatePagination();

  let getDomElement = () => menu;

  return { getDomElement };
}

export { createMenu };
