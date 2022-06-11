let quotes = [
    { 
        quote: "힘의 반지를 운반하는 것은 혼자 하는 거야\n 이 임무는 네게 주어졌다 \n 네가 방법을 차지 못하면 그 누구도 찾지 못해\n아무리 미약한 사람이라도 미래를 바꿀 수 있어 ",
        author: "-반지의 제왕"
    },
    { 
        quote: "스트라이더가 간달프의 친구인지 아닌지 어떻게 알아\n 믿는 것 외에는 달리 선택의 여지가 없잖아",
        author: "-반지의 제왕"
    },
    { 
        quote: "살다보면 누구나 운명이 버거울 때가 있지\n 하지만 그건 우리가 결정할 수 있는게 아니란다 \n 우리가 할일은 주어진 시간으로 어떻게 할 것인가를 정할 뿐이지\n이 세상에는 악의 세력 외에 많은 세력이 존재한단다\n빌보는 반지를 찾을 운명이었어\n그렇다면 너 역시 반지를 갖게될 운명이었던 거야\n그렇게 생각하면 기운이 나지 ",
        author: "-반지의 제왕"
    },
    {
        quote:"우린 모든 사물을 똑같이 보진 않아요. \n우린 거의 모든 것에 견해가 달라요. \n하지만 내가 무언가 될 수 있다고 난 마음으로 믿어요.\n그리고 그건 제가 아빠와 다르기 때문이 아니에요. 똑같기 때문이죠.\n저도 고지식하고 강할 수 있어요. \n제가 바라는 건 아빠처럼 좋은 사람이 되는 거예요.",
        author:"-OCTOBER SKY"
    },
    {
        quote:"호머, 솔직히 말해. \n콜우드의 몇명 애들이 전국 과학박람회에서 이길 가능성이 얼마나 되?\n백만분의 일이야, 오델\n그렇게 높아? 왜 얘기 안했어?",
        author:"-OCTOBER SKY"
    },
    {
        quote:"편견은 내가 다른 사람을 사랑하지 못하게 만들고,\n오만은 다른 사람이 나를 사랑할 수 없게 만든다.",
        author:"-오만과 편견"
    },
    {
        quote:"무언가 부족한 것이 있다는 건 오히려 다행이야.\n만약 모든 준비가 완벽하다면, 실망하는 일이 반드시 생길테니까",
        author:"-오만과 편견"
    },
    {
        quote:"산다는 건 어차피 외로움을 견디는 것.\n누군가가 그랬지. 지구의 4억 인구가 있다면 \n4억개의 고독이 있다고\n고독은 사람을 철학하게 하는구나.",
        author:"-연애시대"
    },
    {
        quote:"집안의 반대를 비관한 20대 남녀,\n자살미수\n\n저녁 신문에 실린 짧은 기사는\n그들의 사랑도 고통도 평범하게 만들었다.\n\n그날의 내 결심을 \n평범하게 만들면 어떻게 될까?\n\n이혼하고도 감정정리가 안되던 20대 중반의 여자\n질질끌던 관계에 종지부를 찍다.",
        author:"-연애시대"
    },

]
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


const images = [
    "1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png",
]
const chosenImg = images[Math.floor(Math.random()*images.length)];

const poster = document.querySelector(".welcome_poster");
const posterClass = poster.classList;
const card = document.querySelector(".card_poster")
const cardSpan = document.querySelector(".card_poster span:first-child");
const cardSpanA = document.querySelector(".card_poster span:last-child");
const cardImg = document.querySelector(".card_img")
const igg = document.createElement("img");

const HIDDEN_CLASSNAME = "hidden";



function handlePosterClick() {
    poster.classList.add(HIDDEN_CLASSNAME);
    card.classList.remove(HIDDEN_CLASSNAME);
    cardImg.classList.remove(HIDDEN_CLASSNAME);
    cardSpan.innerText = todaysQuote.quote;
    cardSpanA.innerText = todaysQuote.author;
    igg.src = `img/${chosenImg}`;
    cardImg.appendChild(igg);
}

function handleCardImgClick() {
    poster.classList.remove(HIDDEN_CLASSNAME);
    card.classList.add(HIDDEN_CLASSNAME);
    cardImg.classList.add(HIDDEN_CLASSNAME);
    location.assign(location);
}

poster.addEventListener("click", handlePosterClick);
cardImg.addEventListener("click", handleCardImgClick);