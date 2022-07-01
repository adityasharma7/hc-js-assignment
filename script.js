let img = document.getElementById("img")
img.onload = ()=> alert("image is loaded sucessfully")

img.onerror =()=>{
    alert("Error Occurs ");
    img.src = "https://images.pexels.com/lib/api/pexels.png"
}

