
//#1 NAV
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
    header.style.height = "5rem";
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
window.onload = (event) => {
//   alert('Welcome to Fun Bus');
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

// #8 