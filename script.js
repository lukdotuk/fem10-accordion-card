const itemHeader = document.querySelectorAll(".item-header");

itemHeader.forEach(itemHeader => {
  itemHeader.addEventListener("click", event => {
    itemHeader.classList.toggle("active");
  });
});