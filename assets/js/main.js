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

// Owl Carousel

$('.owl-carousel').owlCarousel({
loop:false,
margin:20,
nav:true,
dots:false,
autoplay:true,
autoplayTimeout:1500,
autoplayHoverPause:true,
stagePadding:50,
responsive:{
  0:{
      items:2,
      center:true
  },
  600:{
      items:3
     
  },
  1000:{
      items:6,
      nav:true
  }
}
})
