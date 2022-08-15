$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active')
        $('.nav__buttons').toggleClass('active')
        // $('body').toggleClass('lock')
        // $('.header__finder').toggleClass('active')
    })
})

// Submenu
function submenu() {
    const submenu = document.querySelector('.submenu')
    const trigger = document.querySelector('.with__submenu')
    const triggerLink = document.querySelector('.header__link')
    const arrow = document.querySelector('.submenu__arrow')
    const subPath = document.querySelector('.submenu__path')

    trigger.addEventListener('click', () => {
        submenu.classList.toggle('active')
        triggerLink.classList.toggle('active')
        subPath.classList.toggle('active')
    })
}
submenu()

// Swiper// Swiper// Swiper

const swiper = new Swiper('.swiper__team', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.prev__btn',
        prevEl: '.prev__btn',
    },


      // Responsive breakpoints
      breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
          768: {
              slidesPerView: 3,
          },
    }
});
