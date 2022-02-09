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

    $('.show-cpassword-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $('#cpassword-input').attr('type', 'password');
            $(this).removeClass('active');
        } else {
            $('#cpassword-input').attr('type', 'text');
            $(this).addClass('active');
        }
    });

});