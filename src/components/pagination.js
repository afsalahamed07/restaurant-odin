function createPagination(length, itemsPerPage, callback) {
  const pagination = document.createElement("div");
  let currentPage = 1;

  function updatePagination() {
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === Math.ceil(length / itemsPerPage);
  }

  pagination.classList.add(
    "flex",
    "flex-row",
    "justify-center",
    "gap-4",
    "p-3",
  );

  const previous = document.createElement("button");
  const next = document.createElement("button");
  const page = document.createElement("p");

  const pagButtonClasses = [
    "bg-red-100",
    "hover:bg-red-600",
    "hover:text-white",
    "font-black",
    "py-2",
    "px-4",
    "rounded-md",
    "cursor-pointer",
  ];

  previous.classList.add(...pagButtonClasses);
  next.classList.add(...pagButtonClasses);
  page.classList.add("p-2", "font-bold", "text-lg");

  previous.textContent = "<";
  next.textContent = ">";
  page.textContent = "1";

  pagination.appendChild(previous);
  pagination.appendChild(page);
  pagination.appendChild(next);

  const getDomElement = () => pagination;

  const setPage = (num) => {
    currentPage = num;
    page.textContent = num;
  };

  next.addEventListener("click", () => {
    page.textContent = ++currentPage;
    callback();
    updatePagination();
  });

  previous.addEventListener("click", () => {
    page.textContent = --currentPage;
    callback();
    updatePagination();
  });

  const setItemsPerPage = (num) => {
    itemsPerPage = num;
  };

  const getCurrentPage = () => currentPage;

  return { getDomElement, setPage, updatePagination, getCurrentPage, setItemsPerPage };
}

export { createPagination };
