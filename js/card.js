const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
]

const chosenImg = images[Math.floor(Math.random()*images.length)];

const poster2 = document.querySelector(".welcome_poster");
const posterClass2 = poster2.classList;
const cardImg = document.querySelector(".card_img")
const cardImgThumb = document.querySelector(".card_img-thumb")

const igg = document.createElement("img");
igg.src = `img/${chosenImg}`;
cardImg.appendChild(igg);

