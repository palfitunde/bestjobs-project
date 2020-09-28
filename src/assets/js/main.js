$(document).ready(function(){
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('opened');
        $('#navBar').slideToggle();
    });
    ($(window).scrollTop() > $('main .job-list').offset().top) ? $('body').addClass('fixed-header') : $('body').removeClass('fixed-header');

    $(window).scroll(function (event) {
        ($(window).scrollTop() > $('main .job-list').offset().top) ? $('body').addClass('fixed-header') : $('body').removeClass('fixed-header');
    });

  });