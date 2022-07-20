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
// Collapse the navbar by adding the top-nav-on-scroll class
function scrollFunction() {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById('mainNavBar').classList.add('top-nav-on-scroll')
  } else if (document.documentElement.scrollTop < 1) {
    document.getElementById('mainNavBar').classList.remove('top-nav-on-scroll')
  }
}
// Hide Nav on scroll down
document.addEventListener('DOMContentLoaded', function () {
  el_autohide = document.querySelector('.autohide')

  // add padding-top to body (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight
  document.body.style.paddingTop = navbar_height + 'px'

  if (el_autohide) {
    var last_scroll_top = 0
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY
      if (document.documentElement.scrollTop > 56) {
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove('scrolled-down')
          el_autohide.classList.add('scrolled-up')
        } else {
          el_autohide.classList.remove('scrolled-up')
          el_autohide.classList.add('scrolled-down')
        }
        last_scroll_top = scroll_top
      }
    })
    // window.addEventListener
  }
  // if
})

/******************************/
/*     Back To Top Button     */
/******************************/
// Get the button
myButton = document.getElementById('backToTopButton')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.classList.add('show')
  } else {
    myButton.classList.remove('show')
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
