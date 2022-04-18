let city = document.querySelector('#myimg');

city.src = "Noimage.jpg"; //Noimage.jpg is not exist (city.png exist)

city.addEventListener('load', () => alert('NO error found, Map  has been loaded successfully!'));

city.addEventListener('error', () => {
    city.src = "./images/map.jpg";
    alert('city has been changed due to some error');
});