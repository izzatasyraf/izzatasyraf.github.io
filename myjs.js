$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});


// Scrolling Effect
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('nav ul li a').css('color', 'white');
    }

    else {
        $('nav').removeClass('black');
        $('nav ul li a').css('color', 'white')
    }
});