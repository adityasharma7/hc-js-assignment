let names = document.querySelectorAll(".name");

for(let name of names) {
    name.addEventListener("click", () => {
        names.forEach(name => name.classList.toggle("change-background"));
    })
}

// nameHeading.addEventListener("click", () => {
//     for(let name of names) {
//         name.style.backgroundColor = "blue";
//     }
// })

// names.addEventListener("click", () => {
//     for(let name of names) {
//         name.style.backgroundColor = "blue";
//     }
// })

// // ===============================================

// let rows = document.querySelectorAll("tr");
// rows[0].children[1].addEventListener("click", () => {
//     for(let row of rows) {
//         row.children[1].style.backgroundColor = "blue";
//     }
// })



// let tbl = document.querySelectorAll("table");

// tbl[0].addEventListener("click", (e) => {
//     console.log(e.target);
// })



// row.children[1].innerHTML !== 'Name' ? row.children[1].style.backgroundColor = "blue" : null;
