    // Task-1 To create a textarea and if a user makes changes to it without saving then show an alert that data is not saved.
    "use strict";
    let changes = false;

    function Savebtn() {
        changes = true;
        alert('Data Saved, Now you can leave the page');
        const txt = document.getElementById("TextBox1");
        const savebtn = document.getElementById("save-btn");

        const blob1 = new Blob([txt], { type: "text/plain" })

        savebtn.href = URL.createObjectURL(blob1);
        savebtn.download = "ny.txt";

    }
    window.onbeforeunload = function() {
        if (!changes) return "";
    };