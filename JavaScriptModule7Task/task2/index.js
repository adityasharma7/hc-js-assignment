let alltableData = document.querySelectorAll("td");
let alltableHeads = document.querySelectorAll("th");

for(let data of alltableData) {
    data.addEventListener("click", () => {
        data.classList.toggle("change-background");
        data.classList.toggle("change-text-color");
    })
}

for(let head of alltableHeads) {
    head.addEventListener("click", () => {
        head.classList.toggle("change-background");
        head.classList.toggle("change-text-color");
    })
}
