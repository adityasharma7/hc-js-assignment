"use strict"
let cell = document.querySelectorAll("tr>th,td");
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", (e) => {
        if (!(cell[i].style.backgroundColor === "red")) {
            cell[i].style.backgroundColor = 'red';
        }
        else {
            cell[i].style.backgroundColor = "";
        }
    });
}

