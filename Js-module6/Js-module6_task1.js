// "use strict";
// Task-1.To change the background color of the second column of a table having “n ” rows on click by using querySelector. -->

let col2 = document.querySelectorAll("td:nth-child(2)");

for (let x in col2)
    col2[x].onclick = () => col2.forEach(e => e.style.backgroundColor = "cyan");