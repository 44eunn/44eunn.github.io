const imgs = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg"];

const todaysImgNum = Math.floor(Math.random() * imgs.length);
const todaysImg = imgs[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center; background-repeat: no-repeat; background-size: cover; }`;

document.head.appendChild(bgImg);
console.log(bgImg);