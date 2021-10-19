var storedItem = localStorage.getItem("storedItem");

var flag = false;

function save() {
  var Item = document.getElementById("input").value;
  if (Item !== "") {
    localStorage.setItem("storedItem", Item);
    document.getElementById("savedText").innerHTML = Item + " -- SAVED...";
  } else document.getElementById("savedText").innerHTML = "";
}

function exit() {
  var Item = document.getElementById("input").value;
  if (Item === "") alert("Please write Something inside textArea");
  else if (localStorage.getItem("storedItem") == null) {
    alert("Please Save Data First");
  }
  localStorage.clear("storedItem");
  location.reload();
}
