var Table = document.getElementsByTagName("table")[0];

Table.onclick = (eve) => {
  var flag;
  const target = eve.target;
  const cellColor = eve.target.style.backgroundColor == "";
  console.log(cellColor);
  if (cellColor == true) flag = true;

  if (!flag) {
    target.setAttribute("style", "background-color: ");
    flag = true;
  } else {
    target.setAttribute("style", "background-color: #F00");
    flag = false;
  }
};
