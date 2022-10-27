const expandables = document.querySelectorAll(".expandable");
expandables.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("expandable--expanded");
  })
);
