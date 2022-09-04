
const button = document.querySelector("button");
const rows = document.querySelectorAll("tr");

function clickhandler(event) {
    console.log('hii');

}


for (let element of document.querySelectorAll('*')) {
    element.addEventListener('click', clickhandler)

}
button.addEventListener("click", (e) => {
    rows.forEach((element) => {
        element.cells[1].style.background = "aqua";
    });
});