const nameColElements = document.querySelectorAll('.name');

// Click Anywhere in column to change its color -
nameColElements.forEach(element => {
    element.addEventListener('click', () => {
        nameColElements.forEach(colElement => {
            colElement.classList.toggle('change');

        })
    })
})