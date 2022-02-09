$(document).ready(function() {

    // Hamburger Menu
    $('.navigation-bar-v1 .hamburger-menu-open-trigger').on('click', function() {
        if($('.hamburger-menu').hasClass('active')) {
            $('body').css('overflow', 'auto');
            $('.hamburger-menu-open-trigger').html('<i class="far fa-bars"></i>');
            $('.hamburger-menu').removeClass('active');
        } else {
            $('body').css('overflow', 'hidden');
            $('.hamburger-menu-open-trigger').html('<i class="far fa-times"></i>');
            $('.hamburger-menu').addClass('active');
        }
    });

    // Links
    $('.links-column h4').on('click', function() {
        if($(this).parent().hasClass('active')) {
            $('.links-column').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.links-column').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

});