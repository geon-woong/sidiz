window.onload = function () {
    // swiper 슬라이드 관련
    new Swiper('.sw-visual', {
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    });

    let sidiz = $('#sidiz');
    let product = $('#product');
    let support = $('#support');
    let menu_1 = $('.menu-1');
    let menu_2 = $('.menu-2');
    let menu_3 = $('.menu-3');

    sidiz.mouseenter(function () {
        menu_1.stop().slideDown()
    })

    $('.menu-1 ul').mouseleave(function () {
        menu_1.stop().slideUp()
    })
    product.mouseenter(function () {
        menu_2.stop().slideDown()
    })

    $('#menu-product').mouseleave(function () {
        menu_2.stop().slideUp()
    })
    support.mouseenter(function () {
        menu_3.stop().slideDown()
    })

    $('.menu-3 ul').mouseleave(function () {
        menu_3.stop().slideUp()
    })

}