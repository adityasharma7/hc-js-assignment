// import {getScrumData, saveScrumData} from './app.js'

const scrumData = getScrumData();
const scrumBody = document.querySelector('.scrumBody');

// Get's scrum list data from local storage
function getScrumData() {
    let scrumList;
    if (localStorage.getItem('Scrum_List') === null){
        scrumList = [];
    } else {
        scrumList = JSON.parse(localStorage.getItem('Scrum_List'))
    }

    return scrumList
}

// Adds Table Data Row to Scrum Table -
function createScrumTable(scrumData) {
    let i = 1;
    scrumData.forEach(element => {
        const tr = document.createElement('tr');

        const tdSno = document.createElement('td');
        tdSno.innerHTML = i;
        tr.appendChild(tdSno)

        const tdDate = document.createElement('td');
        tdDate.innerHTML = element.Date;
        tr.appendChild(tdDate)

        const tdName = document.createElement('td');
        tdName.innerHTML = element.Full_Name;
        tr.appendChild(tdName)

        const tdHours = document.createElement('td');
        tdHours.innerHTML = element.Time;
        tr.appendChild(tdHours)

        const tdHaveDone = document.createElement('td');
        tdHaveDone.innerHTML = element.Tasks_Done;
        tr.appendChild(tdHaveDone)
        
        const tdWillDo = document.createElement('td');
        tdWillDo.innerHTML = element.Will_Do;
        tr.appendChild(tdWillDo)
        
        scrumBody.appendChild(tr)
        i++
    });
}

// Task 2 - Colour Cell To Red
function colorizer(tableRow) {
    tableRow.forEach(ele => {
        ele.addEventListener('click', (e) => {
            const cell = e.target;
            cell.classList.toggle('colorizer');
        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // Create Table -
    createScrumTable(scrumData)

    const tableRow = document.querySelectorAll('tr');
    colorizer(tableRow)
})
