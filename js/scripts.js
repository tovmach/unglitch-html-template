/* Description: Custom JS file */

window.onscroll = function () {
  scrollFunction()
  scrollFunctionBTT() // back to top button
}

window.onload = function () {
  scrollFunction()
}

/******************************/
/*        Navigation          */
/******************************/
// Collapse the navbar by adding the top-nav-collapse class
function scrollFunction() {
  if (document.documentElement.scrollTop > 15) {
    document.getElementById('mainNavBar').classList.add('top-nav-collapse')
  } else if (document.documentElement.scrollTop < 15) {
    document.getElementById('mainNavBar').classList.remove('top-nav-collapse')
  }
}

/******************************/
/*     Back To Top Button     */
/******************************/
// Get the button
myButton = document.getElementById('backToTopButton')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block'
  } else {
    myButton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // for Safari
  document.documentElement.scrollTop = 0 // for Chrome, Firefox, IE and Opera
}

/**********************/
/*       Swiper       */
/**********************/
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
