let changesSaved = false;

function saveChanges() {
    changesSaved = true;
}

function findIfSaved() {

    if (!changesSaved) {
        window.onbeforeunload = function() {
            if (!changesSaved) return "Save changes before leaving"
        }
    }

    document.getElementById("txt-area").value = "";
}