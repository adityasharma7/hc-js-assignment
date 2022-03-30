let img = document.getElementById('image');

img.onload = function() {
    alert("image is loaded sucessfully");
}

img.onerror = function() {
    alert("Error finding source");
    img.src = "https://i.pinimg.com/originals/19/85/30/198530d5a9c572ca5e09e302a3082351.jpg";
}


// https://i.pinimg.com/originals/19/85/30/198530d5a9c572ca5e09e302a3082351.jpg