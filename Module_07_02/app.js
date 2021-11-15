var table = document.getElementsByTagName("table")[0];


// By Using EventListener

table.addEventListener("click", (event) => {
  var flag;
  const cellColor = event.target.style.backgroundColor == "";
  if (cellColor == true) flag = true;

  if (!flag) {
    event.target.setAttribute("style", "background-color: ");
    flag = true;
  } else {
    event.target.setAttribute("style", "background-color: #F00");
    flag = false;
  }
})


// By Using EventHandler

// table.onclick = (eve) => {
// var flag;
// const cellColor = event.target.style.backgroundColor == "";
// if (cellColor == true) flag = true;

// if (!flag) {
//   event.target.setAttribute("style", "background-color: ");
//   flag = true;
// } else {
//   event.target.setAttribute("style", "background-color: #F00");
//   flag = false;
// }
// };
