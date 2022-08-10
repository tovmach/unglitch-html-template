/* Description: Custom JS file */

/*=================================
   JavaScript INDEX
===================================
    1. Onload and Onscroll
    2. Navigation 
    3. Skills
    4. Testimonial Swiper
    5. Back To Top Button
    6. Custom Cursor
    7. Circular Text 
    8. Form
    9. Glitch Section Name Text


 =================================*/

// use strict is on
'use strict'

/********************/
/*     1. Onload    */
/********************/
window.onload = () => {
  unglitch_navigation()
  unglitch_skills_tabs_change_years()
  unglitch_testimonial_swiper()
  unglitch_back_to_top_button()
  unglitch_cutom_cursor()
  unglitch_circular_text()
  unglitch_form()
  unglitch_glitch()
}

/********************************/
/*       2. Navigation          */
/********************************/

const unglitch_navigation = () => {
  const mainNavBar = document.getElementById('mainNavBar')

  // Collapse the navbar by adding the navbar-scrolled class
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1) {
      mainNavBar.classList.add('navbar-scrolled')
    } else if (document.documentElement.scrollTop < 1) {
      mainNavBar.classList.remove('navbar-scrolled')
    }
  })

  // Hide main nav on scroll down show on scroll up
  const navbarHeight = mainNavBar.offsetHeight
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
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

  // Close offcanvas on click from mobile menu
  const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasNavbar')
  const navUl = document.getElementById('navlist')
  const navLiList = navUl.children
  for (const li of navLiList) {
    li.addEventListener('click', () => {
      setTimeout(() => bsOffcanvas.hide(), 500)
    })
  }
}

/**********************/
/*      3. Skills     */
/**********************/
const unglitch_skills_tabs_change_years = () => {
  const yearsOfExperience = document.querySelector(
    '.years-of-experience__number'
  )
  const skills = document.querySelectorAll('.skill')

  if (skills && yearsOfExperience) {
    const firstSkillYears = skills[0].dataset.years
    yearsOfExperience.textContent = firstSkillYears

    for (const skill of skills) {
      skill.addEventListener('click', () => {
        const years = skill.dataset.years

        yearsOfExperience.textContent = years
      })
    }
  }
}

/************************************/
/*      4. Testimonial Swiper       */
/************************************/
// initiate the testimonial swiper
const unglitch_testimonial_swiper = () => {
  new Swiper('#testimonialSwiper', {
    slidesPerView: 1,

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}

/*********************************/
/*     5. Back To Top Button     */
/*********************************/

const unglitch_back_to_top_button = () => {
  // Get the button
  const myButton = document.getElementById('backToTopButton')

  // When the user scrolls down 20px from the top of the document, show the button
  window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.classList.add('back-to-top-button__show')
    } else {
      myButton.classList.remove('back-to-top-button__show')
    }
  })

  // When the user clicks on the button, scroll to the top of the document
  myButton.addEventListener('click', () => {
    document.body.scrollTop = 0 // for Safari
    document.documentElement.scrollTop = 0 // for Chrome, Firefox, IE and Opera
  })
}
/*********************************/
/*       6. Custom Cursor        */
/*********************************/
// set custom cursor
function unglitch_cutom_cursor() {
  // add js-link class to swiper.js buttons to enable cursor interactions
  // *** need to put this code before seting cursor
  const swiperElements = document.querySelectorAll(
    '.swiper-button-next, .swiper-pagination-bullet, .swiper-button-prev'
  )
  for (const element of swiperElements) {
    element.classList.add('js-link')
  }

  // custom cursor code
  const cursorInner = document.querySelector('.cursor-inner')
  const cursorOuter = document.querySelector('.cursor-outer')
  const links = document.querySelectorAll(
    'a, button, .js-link, input[type="button"], input[type="submit"]'
  )

  document.addEventListener('mousemove', (e) => {
    cursorInner.style.transform =
      'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
    cursorOuter.style.transform =
      'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
    cursorInner.style.visibility = 'visible'

    cursorOuter.style.visibility = 'visible'
  })

  document.addEventListener('mousedown', () => {
    cursorInner.classList.add('cursor-click')
    cursorOuter.classList.add('cursor-click')
  })
  document.addEventListener('mouseup', () => {
    cursorInner.classList.remove('cursor-click')
    cursorOuter.classList.remove('cursor-click')
  })
  document.addEventListener('mouseenter', () => {
    cursorInner.classList.remove('cursor-hidden')
    cursorOuter.classList.remove('cursor-hidden')
  })
  document.addEventListener('mouseleave', () => {
    cursorInner.classList.add('cursor-hidden')
    cursorOuter.classList.add('cursor-hidden')
  })

  for (const link of links) {
    link.addEventListener('mouseover', () => {
      cursorInner.classList.add('cursor-hover')
      cursorOuter.classList.add('cursor-hover')
    })
    link.addEventListener('mouseout', () => {
      cursorInner.classList.remove('cursor-hover')
      cursorOuter.classList.remove('cursor-hover')
    })
  }
}

/*********************************/
/*       7. Circular Text        */
/*********************************/
const unglitch_circular_text = () => {
  const list = document.querySelectorAll('.circular-text')
  if (list) {
    for (const item of list) {
      new CircleType(item)
    }
  }
}
/*******************************/
/*          8. Form            */
/*******************************/
const unglitch_form = () => {
  const form = document.querySelector('.contact__form')
  const form_button = document.querySelector('.form-button')
  const form_message = document.querySelector('.form-message')
  const form_email = document.querySelector('.form-email')
  const form_name = document.querySelector('.form-name')
  const contact_alert = document.querySelector('.contact__alert')
  const close_alert = document.querySelector('.close-alert')
  const contact_data = {}
  if (form) {
    form_button.addEventListener('click', (e) => {
      e.preventDefault()
      form.classList.add('was-validated')
      if (form.checkValidity()) {
        // console log the contact_data object
        contact_data.name = form_name.value
        contact_data.email = form_email.value
        contact_data.message = form_message.value
        console.log(contact_data)
        // clean input values
        form_name.value = ''
        form_email.value = ''
        form_message.value = ''
        form.classList.remove('was-validated')
        // show alert
        contact_alert.classList.add('show-alert')
        setTimeout(() => {
          contact_alert.classList.remove('show-alert')
        }, 4000)
      } else {
        e.stopPropagation()
      }
    })

    close_alert.addEventListener('click', () => {
      contact_alert.classList.remove('show-alert')
    })
  }
}
/*********************************/
/*           9. Glitch           */
/*********************************/
// Glitch Section Name Text
// add the textContent to the dataset so it can be use later in css
const unglitch_glitch = () => {
  const glitchList = document.querySelectorAll('.glitch-1')
  if (glitchList) {
    for (const glitch of glitchList) {
      glitch.dataset.glitch = glitch.textContent
    }
  }
}
