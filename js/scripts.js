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
const mainNavBar = document.getElementById('mainNavBar')

// Collapse the navbar by adding the navbar-scrolled class
function scrollFunction() {
  if (document.documentElement.scrollTop > 1) {
    mainNavBar.classList.add('navbar-scrolled')
  } else if (document.documentElement.scrollTop < 1) {
    mainNavBar.classList.remove('navbar-scrolled')
  }
}

// Hide main nav on scroll down show on scroll up
document.addEventListener('DOMContentLoaded', function () {
  // add padding-top to body (if necessary)
  const navbarHeight = mainNavBar.offsetHeight
  document.body.style.paddingTop = navbarHeight + 'px'

  if (mainNavBar) {
    let lastScrollTop = 0
    window.addEventListener('scroll', function () {
      let scrollTop = window.scrollY
      /* Let navbarHeight px scroll before hiding the main nav */
      if (document.documentElement.scrollTop > navbarHeight) {
        if (scrollTop < lastScrollTop) {
          /* add the navbar-scrolled-up class to main nav and removes navbar-scrolled-down */
          mainNavBar.classList.remove('navbar-scrolled-down')
          mainNavBar.classList.add('navbar-scrolled-up')
        } else {
          /* add the navbar-scrolled-down class to main nav and removes navbar-scrolled-up */
          mainNavBar.classList.remove('navbar-scrolled-up')
          mainNavBar.classList.add('navbar-scrolled-down')
        }
        lastScrollTop = scrollTop
      }
    })
  }
})

//Close offcanvas from mobile menu
const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasNavbar')
const navUl = document.getElementById('navlist')
const navLiList = navUl.children
for (const li of navLiList) {
  li.addEventListener('click', () => {
    setTimeout(() => bsOffcanvas.hide(), 500)
  })
}

/**********************/
/*       Swiper       */
/**********************/
var swiper = new Swiper('#testimonialSwiper', {
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

/******************************/
/*     Back To Top Button     */
/******************************/
// Get the button
myButton = document.getElementById('backToTopButton')

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.classList.add('back-to-top-button__show')
  } else {
    myButton.classList.remove('back-to-top-button__show')
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // for Safari
  document.documentElement.scrollTop = 0 // for Chrome, Firefox, IE and Opera
}
