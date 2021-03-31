$(document).ready(function () {
    $('.hamburger').on('click', function () {
        $('.nav').slideToggle();
        $(this).toggleClass('activ');
        $('.header__inners').toggleClass('activ');
        $('.header__wrap').toggleClass('activ');
        $('.header__boxs').slideToggle();
        $('.header__boxs-wrap').slideToggle();
    });

    $('.header__boxs-img img').on('click', function () {
        $('.header__boxs-wrap').slideToggle();
    });
    $('.nav__item').on('click', function () {
        $('.nav__item').removeClass('activ'); 
        $(this).addClass('activ');
    });
});
