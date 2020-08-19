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
    function ValidateEmail() {

    }

    $(".menu-bar").on("click", function () {
        $(".drop-down").slideToggle();
        $(this).find(".trigger").toggleClass("rotate");
    })

    document.querySelector(".footer form").addEventListener("submit", function (e) {
        e.preventDefault();
        let vals = document.querySelector(".footer form input").value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(vals)) {
            $(".error").hide()
            $(".footer form input").val("")
            return (true)
        }
        if (vals == "") {
            $(".error").show()
        }
        $(".error").show()
        return (false)
    })
});
