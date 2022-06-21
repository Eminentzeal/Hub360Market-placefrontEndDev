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

