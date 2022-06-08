// ? это клик слайдер
/* $(document).ready(function () {
    $('.carousel__iner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type = "button"class = "slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }, ]
    });
}); */

const slider = tns({
    container: '.carousel__iner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,

    navPosition: "bottom",
    nav: false,
    responsive: {
        320: {
            nav: true,
        },
        576: {
            nav: false,

        },
        //  900: {
        //      items: 3
        //  }
    }
});
document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
});

$(document).ready(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.contianer').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
});