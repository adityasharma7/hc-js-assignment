const textArea = document.getElementById("textarea");
const button = document.querySelector("button");

let changed = false,
  buttonClicked = false;

textArea.addEventListener("change", () => {
  changed = true;
});

button.addEventListener("click", () => {
  buttonClicked = true;
});

window.addEventListener("beforeunload", (event) => {
  if (changed && !buttonClicked) {
    event.preventDefault(); //disabled in chrome
    event.returnValue = "";
  }
});
