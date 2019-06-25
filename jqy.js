$(function() {
    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.navigation-sp').addClass('active');
        } else {
            $('.navigation-sp').removeClass('active');
        }
    });



});
