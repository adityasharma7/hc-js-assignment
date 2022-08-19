const button = document.querySelector("button");
const tbl = document.querySelector("tbody");
const rows = document.querySelectorAll("tr");

button.addEventListener("click", (e) => {
  rows.forEach((element, index) => {
    element.cells[1].style.background = "orange";
  });
});
