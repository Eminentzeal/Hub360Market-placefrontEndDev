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

// ====== Image selection on sproduct.html ======

var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
  mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
  mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
  mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
  mainImg.src = smallImg[3].src;
}