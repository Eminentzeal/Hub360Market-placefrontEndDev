// ====== Search select in index.html ======

let select = document.getElementById("select");
let list = document.getElementById("list");
let selectText = document.getElementById("selectText");
let inputfield = document.getElementById("inputfield");
let options = document.getElementsByClassName("options");

select.onclick = function() {
  list.classList.toggle("open");
}

for (option of options) {
  option.onclick = function(){
    selectText.innerHTML = this.innerHTML;
    inputfield.placeholder = `Search in ${selectText.innerHTML}`
  }
}


// ====== Side Menu on index.html ======
// let sideSubmenu = document.getElementById("side-submenu");
// let openBtn = document.getElementById("open-btn");
// let closeBtn = document.getElementById("close-btn");




// openBtn.addEventListener('click', openmenu = () => {
//   sideSubmenu.style.display="block";
//   openBtn.style.display="none";
//   closeBtn.style.display="block";
// })

// closeBtn.addEventListener('click', closemenu = () => {
//   sideSubmenu.style.display="none";
//   openBtn.style.display="block";
//   closeBtn.style.display="none";
// })
