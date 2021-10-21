let text = "";
document.addEventListener("keypress", (event) => {
  text += event.key;
});

function save() {
  console.log(text);
  if (text != "") {
    document.getElementById("savedText").innerHTML = text + " -- SAVED...";
    text = "";
  } else document.getElementById("savedText").innerHTML = "";
}

console.log("Event Hitted");
window.onbeforeunload = function (event) {
  if (text != "") {
    return "Please Save first";
  }
};
