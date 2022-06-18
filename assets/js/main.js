let sideMenu = document.getElementById("side-menu");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");



openmenu = () => {
sideMenu.style.display="block";
menuBtn.style.display="none";
closeBtn.style.display="block";
}

closemenu = () => {
sideMenu.style.display="none";
menuBtn.style.display="block";
closeBtn.style.display="none";
}