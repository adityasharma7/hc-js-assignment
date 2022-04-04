// Task-1.To change the background color of the second column of a table having “n ” rows on click by using querySelector. -->
let x = document.querySelectorAll('tr>th:nth-child(2),td:nth-child(2)');
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", () => {
        for (let j = 0; j < x.length; j++) {
            x[j].style.backgroundColor = 'burlywood';
        }
    });
}
/*let col2 = document.querySelectorAll("td:nth-child(2)");

for (let x in col2) {
    col2[x].addEventListener("click", function() {
        col2.forEach(e => {
            e.style.backgroundColor = "cyan";
        });
    });
}*/