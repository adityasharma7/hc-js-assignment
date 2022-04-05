"use strict";
let logo = document.querySelector('#myimg');

logo.src = "NOimage.jpg"; //NOimage.jpg is not exist (image1.jpg exist)

logo.addEventListener('load', () => alert('NO error found, Logo & document has been loaded successfully!'));

logo.addEventListener('error', () => {
    logo.src = "download.png";
    alert('HotWax Logo has been changed due to some error');
});