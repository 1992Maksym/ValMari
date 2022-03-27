const wow = new WOW;
wow.init();

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
            spaceBetween: 40
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        // clickable dots

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
    // clickable dots
    paginationClickable: true,
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
        clickable: true,
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
    // clickable dots
    paginationClickable: true,
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
            spaceBetween: 30
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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


let burgerMenu = document.querySelector('.burger-menu');
let burger = document.querySelector('.burger');
burger.addEventListener('click',function(){
    burgerMenu.style.display = 'block';
    document.querySelector('body').classList.add('wrap');
})
document.addEventListener( 'click', function(e) {
    if(e.target !== e.target.closest('.burger-menu').querySelector('a')) burgerMenu.style.display = 'none';
    // else if(e.target == e.target.closest('.burger-menu').querySelector('.burger-close')) burgerMenu.style.display = 'none';
});