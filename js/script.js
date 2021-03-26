$(document).ready(function () {
    $('.burger-menu').on('click', function () {
        $('.menu').slideToggle();
        $(this).toggleClass('active');
        $('.header__inner').toggleClass('active');
        $('.header__wrapper').toggleClass('active');
        $('.header__box').slideToggle();
        $('.header__box-wrap').slideToggle();
    });

    $('.header__box-img img').on('click', function () {
        $('.header__box-wrap').slideToggle();
    });
});
