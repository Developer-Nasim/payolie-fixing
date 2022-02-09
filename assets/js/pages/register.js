$(document).ready(function() {

    // Show Password Button
    $('.show-password-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $('#password-input').attr('type', 'password');
            $(this).removeClass('active');
        } else {
            $('#password-input').attr('type', 'text');
            $(this).addClass('active');
        }
    });

});