$(document).ready(function () {

    let slickSlider = {
        productCarousel: $('.product-slider'),
        productCarouselNav: $('.slider-nav'),
        relatedItemsCarousel: $(".review-slider"),

        slick: function (el, slidesToShow, slidesToScroll, arrows, fade, asNavFor, dots, centerMode, focusOnSelect, infinite) {

            el.slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                arrows: arrows,
                fade: fade,
                asNavFor: asNavFor,
                dots: dots,
                centerMode: centerMode,
                focusOnSelect: focusOnSelect,
                infinite: infinite
            });

        },
        init: function () {
            slickSlider.slick(slickSlider.productCarousel, 1, 1, false, true, '.slider-nav', false, null, null, true);
            slickSlider.slick(slickSlider.productCarouselNav, 3, 1, false, false, '.product-slider', false, true, true, true);
            let slideW = 1;
            let slidev = 1;
            if ($(window).width() > 800) {
                slideW = 3
            }
            slickSlider.slick(slickSlider.relatedItemsCarousel, slideW, slidev, false, false, null, true, null, null, true);
        }
    }
    //Functions initialization
    slickSlider.init();
});
