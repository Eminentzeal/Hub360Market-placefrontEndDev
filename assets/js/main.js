
// ====== Side Menu on index.html ======
let sideSubmenu = document.getElementById("side-submenu");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");

openmenu = () => {
sideSubmenu.style.display="block";
menuBtn.style.display="none";
closeBtn.style.display="block";
}

closemenu = () => {
sideSubmenu.style.display="none";
menuBtn.style.display="block";
closeBtn.style.display="none";
}


// ====== Top Header in Index.html ======
let myAccount = document.querySelector('.my-account');

document.querySelector('#account-btn').onclick = () =>{
    myAccount.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// ====== Header in Index.html ======
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    myAccount.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    myAccount.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    myAccount.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    myAccount.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    myAccount.classList.remove('active')
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// ====== Image selection on sproduct.html ======

// var mainImg = document.getElementById("main-img");
// var smallImg = document.getElementsByClassName("small-img");

// smallImg[0].onclick = function() {
//   mainImg.src = smallImg[0].src;
// }

// smallImg[1].onclick = function() {
//   mainImg.src = smallImg[1].src;
// }

// smallImg[2].onclick = function() {
//   mainImg.src = smallImg[2].src;
// }

// smallImg[3].onclick = function() {
//   mainImg.src = smallImg[3].src;
// }
