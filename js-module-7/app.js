// Scrum Application -
var scrumForm = document.forms.scrumForm;

function setScrumData() {

    const date = scrumForm.date.value;
    const fullName = scrumForm.fullName.value;
    const time = scrumForm.time.value;
    const haveDone = scrumForm.haveDone.value;
    const willDo = scrumForm.willDo.value;

    const scrumData = {
        Date: date,
        Full_Name: fullName,
        Time: time,
        Tasks_Done: haveDone,
        Will_Do: willDo
    }

    // Save Scrum Data To Local Storage
    saveScrumData(scrumData);
}

// Getting values on change -
var formSubmitting = false;
var setFormSubmitting = function() {
    formSubmitting = true;
}

var dateValue = () => {
    return scrumForm.date.value
}

var fullNameValue = () => {
    return scrumForm.fullName.value
}
var timeValue = () => {
    return scrumForm.time.value
}
var haveDoneValue = () => {
    return scrumForm.haveDone.value
}
var willDoValue = () => {
    return scrumForm.willDo.value
}

// Save Scrum Data
function saveScrumData(scrumData) {
    let scrumList;

    // Check if data already exist in LS
    if (localStorage.getItem('Scrum_List') === null){
        scrumList = [];
    } else {
        scrumList = JSON.parse(localStorage.getItem('Scrum_List'));
    }

    scrumList.push(scrumData);
    localStorage.setItem('Scrum_List', JSON.stringify(scrumList));
}

// Alert user if data field but not submitted
window.onload = function() {
    window.addEventListener('beforeunload', function(e) {

        const date = dateValue();
        const fullName = fullNameValue();
        const time = timeValue();
        const haveDone = haveDoneValue();
        const willDo = willDoValue();

        let load = true
        let check = [date, fullName, time, haveDone, willDo]

        // Check if data is filled in any scrum form field
        for(let i = 0; i < check.length; i++){
            if (check[i].length >= 1){
                load = false;
                break
            }
        }

        // In user is submitting a form or has'nt data field 
        // in form than let event process
        if (formSubmitting || load){
            return undefined
        }

        var msg = 'Data not saved';

        (e || window.event).returnValue = msg
        return msg
        
    })
}
   
// export { getScrumData, saveScrumData }