
let x = document.querySelectorAll('tr>th:nth-child(2),td:nth-child(2)');
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", () => {
        for (let j = 0; j < x.length; j++) {
            x[j].style.backgroundColor = 'lightgreen';
        }
    });
}

