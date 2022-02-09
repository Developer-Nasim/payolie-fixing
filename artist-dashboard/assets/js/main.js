$(document).ready(function() {

    // Side Bar
    $('.side-bar-open-trigger').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.side-bar').addClass('active');
    });

    $('.side-bar-close-trigger').on('click', function() {
        $('body').css('overflow', 'auto');
        $('.side-bar').removeClass('active');
    });

});