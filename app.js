const images = [
  "imgs/1.png",
  "imgs/12.png",
  "imgs/41.png",
  "imgs/5.png",
  "imgs/52.png",
];

const container = document.getElementById("container");

function renderImg() {
  for (let i = 0; i < images.length; i++) {
    container.innerHTML += `<div class="gall-img" style="background-image: url(${images[i]})">`;
  }
}
renderImg();
