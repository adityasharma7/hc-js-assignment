const myElement = document.getElementsByTagName("img")[0];

const url = "./PROFILE.jpeg";
let response = fetch(url);

let img = document.createElement("img");
const center = document.getElementsByTagName("center")[0];
center.append(img);
response.then((eve) => {
  if (eve.ok) {
    img.src = eve.url;
  } else {
    img.src =
      "https://play-lh.googleusercontent.com/dmbgsqIliQgohOVI-uD5NrexgkEQJbI_4-JmDB5TC6YbRdDnTiQd4APiZ5hIrw2SSga2";
  }
});
