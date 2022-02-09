$(document).ready(function() {

    // Saved Payment Options
    $('.checkout .container .checkout-right .saved-payment-options-box .saved-payment-options-box-bottom .radio').on('click', function() {
        $(this).toggleClass('active');

        $('.checkout .container .checkout-right .more-payment-options').removeClass('active');

        $('.checkout .container .checkout-right .more-payment-options-content').removeClass('active');

        $('.checkout .container .checkout-right .more-payment-options-content .payment-options-box .payment-options-box-bottom .payment-option .radio').removeClass('active');

        $('.checkout .container .checkout-right .credit-debit-card-form').removeClass('active');

        $('.checkout .container .checkout-right .order-summary-box').addClass('active');
        $('.checkout .container .checkout-right .order-summary-box-2').removeClass('active');
        $('.checkout .container .checkout-right .order-summary-box-3').removeClass('active');
    });

    // More Payment Options
    $('.checkout .container .checkout-right .more-payment-options').on('click', function() {
        $('.checkout .container .checkout-right .saved-payment-options-box .saved-payment-options-box-bottom .radio').removeClass('active');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.checkout .container .checkout-right .more-payment-options-content').removeClass('active');

            $('.checkout .container .checkout-right .more-payment-options-content .payment-options-box .payment-options-box-bottom .payment-option .radio').removeClass('active');

            $('.checkout .container .checkout-right .credit-debit-card-form').removeClass('active');

            $('.checkout .container .checkout-right .order-summary-box').addClass('active');
            $('.checkout .container .checkout-right .order-summary-box-2').removeClass('active');
            $('.checkout .container .checkout-right .order-summary-box-3').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.checkout .container .checkout-right .more-payment-options-content').addClass('active');
        }
    });

    // Payment Options
    $('.checkout .container .checkout-right .more-payment-options-content .payment-options-box .payment-options-box-bottom .payment-option .radio').on('click', function() {
        $('.checkout .container .checkout-right .more-payment-options-content .payment-options-box .payment-options-box-bottom .payment-option .radio').removeClass('active');
        $(this).addClass('active');

        $('.checkout .container .checkout-right .credit-debit-card-form').removeClass('active');

        if($(this).attr('data-val') === 'paypal') {
            $('.checkout .container .checkout-right .order-summary-box').removeClass('active');
            $('.checkout .container .checkout-right .order-summary-box-2').addClass('active');
        } else if($(this).attr('data-val') === 'credit-and-debit') {
            $('.checkout .container .checkout-right .credit-debit-card-form').addClass('active');

            $('.checkout .container .checkout-right .order-summary-box').removeClass('active');
            $('.checkout .container .checkout-right .order-summary-box-3').addClass('active');
        }
    });

    // Save As Default
    $('.checkout .container .checkout-right .credit-debit-card-form .save-as-default-input-group .checkbox').on('click', function() {
        $(this).toggleClass('active');
    });

});