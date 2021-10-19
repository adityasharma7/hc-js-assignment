var col2 = document.querySelectorAll(".clm2");
var a = document.querySelectorAll("tr > .clm2");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click", (eve) => {
    for (i = 0; i < col2.length; i++) col2[i].style.backgroundColor = "red";
  });
}
