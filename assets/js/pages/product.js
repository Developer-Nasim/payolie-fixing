$(document).ready(function() {

    // Product Images
    $('.product .container .product-top .product-images .product-bottom-images .product-bottom-image').on('click', function() {
        $('.product .container .product-top .product-images .product-bottom-images .product-bottom-image').removeClass('active');
        $(this).addClass('active');

        $(this).parent().prev().children('img').attr('src', $(this).attr('data-img-src'));
    });

});