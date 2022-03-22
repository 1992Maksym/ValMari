import '../scss/style.scss'
import '../node_modules/wow.js/dist/wow.min'
const wow = new WOW;
wow.init();

// import Swiper from './node_modules/swiper/swiper-bundle.min.js'

new Swiper('.swiper',{
    // Optional parameters
    speed: 400,
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 1,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200:{
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

new Swiper('.masterClass-slider',{
    // Optional parameters
    speed: 400,
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 1,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 640px
        630: {
            slidesPerView: 2,
            spaceBetween: 50
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

new Swiper('.offers-wrap',{
    // Optional parameters
    speed: 400,
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 1,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        // when window width is >= 640px
        530: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})