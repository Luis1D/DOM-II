
//#1 NAV ITEMS BORDER BOTTOM ON MOUSEOVER
const navItemArray = document.querySelectorAll('.nav > .nav-link');
let getNavItems = navItemArray.forEach(index => index.addEventListener('mouseover', navClick = function() {
    index.style.borderBottom = "2px solid #000";
}));

//#2 HEADER TO PINK
const pageTitle = document.querySelector('.logo-heading');
const header = document.querySelector('.main-navigation');
header.addEventListener('click', titleMove = function() {
    header.style.backgroundColor = "pink";
    header.style.borderBottom = "none";
})

// #3 SCROLL EFFECT
let last_known_scroll_position = 0;
window.addEventListener('scroll', function(event) {
    last_known_scroll_position = window.scrollY;
    header.style.boxShadow = "0 .2rem 1rem 1rem rgba(0,0,0,.4)";
})

// #4 NIGHT MODE
let nightBtn = document.querySelector(".night-mode");
let state = true;

nightBtn.addEventListener('click', nightMode = function() {
    if (state) {
        document.body.style.backgroundColor = "#212529";
        document.body.style.color = "#fff";
        pageTitle.style.color = "#212529";
        state = false;
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#212529";
        state = true;
    }
});

// #5 ON LOAD GREET USER
const headerImg = document.querySelector('.intro > img');

window.onload = (event) => {
 headerImg.style.transform = "rotate(360deg)";
 headerImg.style.transition = "3s ease";
 console.log(headerImg);
 
};

// #6 SHRINK IMGS ON DOUBLE CLICK
const imgs = document.querySelectorAll('img');

let shrinkImgs = imgs.forEach(index => index.addEventListener('dblclick', imgShrink = function() {
    index.style.width = "1rem";
}));

// #7 SHOW PAGE WIDTH IN HEADER
const h2Header = document.querySelector('.intro > h2');

window.onresize = () => {
    h2Header.textContent = window.innerWidth;
}

// #8 CHANGE BG COLOR OF BTN
const textCards = document.querySelectorAll('.destination');
const textCardBtns = document.querySelectorAll('.destination > .btn');

let getTextCards = textCardBtns.forEach(index => index.addEventListener('click', btnClick = function() {
    index.style.backgroundColor = "pink";
}));

// #9 BOX SHADOW ON IMGS
let imgShadow = imgs.forEach(index => index.addEventListener('mouseover', shadow = function() {
    index.style.boxShadow = "0 1rem 1rem .5rem rgba(0,0,0,.4)";
}));

// #10 
