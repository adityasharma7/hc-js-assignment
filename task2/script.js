const tbl = document.querySelector("table");
let selected;

tbl.addEventListener("click", (e) => {
  let target = e.target;
  if (target.tagName != "TD") return;
  if (selected) selected.style.background = "none";
  selected = target;
  selected.style.background = "red";
});
