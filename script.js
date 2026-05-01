const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    speed: 500,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});