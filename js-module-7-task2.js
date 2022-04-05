// Change the color of the cell to red when the user clicks on a cell and revert when the user again clicks.
let cell = document.querySelectorAll("tr>th,td");
for (let i of cell)
    i.addEventListener("click", () => {
        i.style.backgroundColor == '' ? i.style.backgroundColor = 'red' : i.style.backgroundColor = '';
    });