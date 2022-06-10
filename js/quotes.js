const quotes = [
    { quote: "힘의 반지를 운반하는 것은 혼자 하는 거야\n 이 임무는 네게 주어졌다 \n 네가 방법을 차지 못하면 그 누구도 찾지 못해\n아무리 미약한 사람이라도 미래를 바꿀 수 있어 "
    },
    { quote: "스트라이더가 간달프의 친구인지 아닌지 어떻게 알아\n 믿는 것 외에는 달리 선택의 여지가 없잖아"
    },
    { quote: "살다보면 누구나 운명이 버거울 때가 있지\n 하지만 그건 우리가 결정할 수 있는게 아니란다 \n 우리가 할일은 주어진 시간으로 어떻게 할 것인가를 정할 뿐이지\n이 세상에는 악의 세력 외에 많은 세력이 존재한단다\n빌보는 반지를 찾을 운명이었어\n그렇다면 너 역시 반지를 갖게될 운명이었던 거야\n그렇게 생각하면 기운이 나지 "
    },

]
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
]
const chosenImg = images[Math.floor(Math.random()*images.length)];

const poster = document.querySelector(".welcome_poster");
const posterClass = poster.classList;
const card = document.querySelector(".card_poster")
const cardSpan = document.querySelector(".card_poster span");
const cardImg = document.querySelector(".card_img")
const igg = document.createElement("img");

const HIDDEN_CLASSNAME = "hidden";



function handlePosterClick(event) {
    if (posterClass.contains(HIDDEN_CLASSNAME)) {
        poster.classList.remove(HIDDEN_CLASSNAME);
        card.classList.add(HIDDEN_CLASSNAME);
        cardImg.classList.add(HIDDEN_CLASSNAME);
    } else {
        poster.classList.add(HIDDEN_CLASSNAME);
        card.classList.remove(HIDDEN_CLASSNAME);
        cardImg.classList.remove(HIDDEN_CLASSNAME);
        cardSpan.innerText = todaysQuote.quote;
        igg.src = `img/${chosenImg}`;
        cardImg.appendChild(igg);
    }
}

poster.addEventListener("click", handlePosterClick);
cardImg.addEventListener("click", handlePosterClick);