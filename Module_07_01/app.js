let text = "";
document.addEventListener("keypress", (event) => {
  text += event.key;
});

function save() {
  if (text != "") {
    document.getElementById("savedText").innerHTML = text + " -- SAVED...";
    text = "";
  } else document.getElementById("savedText").innerHTML = "";
}

window.onbeforeunload = function (event) {
  if (text != "") {
    return "Please Save first";
  }
};
