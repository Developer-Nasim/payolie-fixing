$(document).ready(function() {

    // Type Select
    $('body').on('click', function() {
        $('.type-select .selected-option').removeClass('active');
        $('.type-select .options').removeClass('active');
    });

    $('.type-select .selected-option').on('click', function(e) {
        e.stopPropagation();

        $('.filter-category-select .selected-option').removeClass('active');
        $('.filter-category-select .options').removeClass('active');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).next().addClass('active');
        }
    });

    $('.type-select .options p').on('click', function(e) {
        e.stopPropagation();

        $('.type-select .options p').removeClass('active');
        $(this).addClass('active');

        $(this).parent().parent().prev().children('p').html($(this).attr('data-val'));

        $(this).parent().parent().prev().removeClass('active');
        $(this).parent().parent().removeClass('active');
    });

    // Filter Category Select
    $('body').on('click', function() {
        $('.filter-category-select .selected-option').removeClass('active');
        $('.filter-category-select .options').removeClass('active');
    });

    $('.filter-category-select .selected-option').on('click', function(e) {
        e.stopPropagation();

        $('.type-select .selected-option').removeClass('active');
        $('.type-select .options').removeClass('active');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).next().addClass('active');
        }
    });

    $('.filter-category-select .options p').on('click', function(e) {
        e.stopPropagation();

        $('.filter-category-select .options p').removeClass('active');
        $(this).addClass('active');

        $(this).parent().parent().prev().children('p').html($(this).attr('data-val'));

        $(this).parent().parent().prev().removeClass('active');
        $(this).parent().parent().removeClass('active');
    });

    // Rating Select
    $('body').on('click', function() {
        $('.rating-select .selected-option').removeClass('active');
        $('.rating-select .options').removeClass('active');
    });

    $('.rating-select .selected-option').on('click', function(e) {
        e.stopPropagation();

        $('.type-select .selected-option').removeClass('active');
        $('.type-select .options').removeClass('active');

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).next().addClass('active');
        }
    });

    $('.rating-select .options .option').on('click', function(e) {
        e.stopPropagation();
    });

    // Filter Categories
    $('.items .filter-category').on('click', function() {
        $('.items .filter-category').removeClass('active');
        $(this).addClass('active');
    });

    // Filter Box Open Trigger
    $('.filter-box-open-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.items-filter-box').toggleClass('active');
    });

    // Price Range Slider
    $('.price-range-slider').on("mousemove", function(){
        $('.items-filter-box .price-range .price-range-top p span').html($(this).val());
    });

    $('.price-range-slider').on("touchmove", function(){
        $('.items-filter-box .price-range .price-range-top p span').html($(this).val());
    });

    // Items
    $('.item .watch-video-btn').on('click', function() {
        if($(this).parent().next().hasClass('active')) {
            $('.item .info-box-video-wrapper').removeClass('active');
            $(this).parent().next().removeClass('active');
        } else {
            $('.item .info-box-video-wrapper').removeClass('active');
            $(this).parent().next().addClass('active');
        }
    });

    // Info Bar
    $('.info-bar-overlay').on('click', function() {
        $('body').css('overflow', 'auto');
        $(this).removeClass('active');
    });

    $('.item .opt-in-btn').on('click', function() {
        $('body').css('overflow', 'hidden');
        $('.info-bar-overlay').addClass('active');
    });

    $('.info-bar').on('click', function(e) {
        e.stopPropagation();
    });

    $('.info-bar .back-btn').on('click', function() {
        $('body').css('overflow', 'auto');
        $('.info-bar-overlay').removeClass('active');
    });

    $('.info-bar .view-steps-btn').on('click', function() {
        if($('.info-bar .steps').hasClass('active')) {
            $('.info-bar .steps').removeClass('active');
            $('.info-bar .view-steps-btn').html('View Steps <i class="far fa-chevron-down"></i>');
        } else {
            $('.info-bar .steps').addClass('active');
            $('.info-bar .view-steps-btn').html('Hide Steps <i class="far fa-chevron-up"></i>');
        }
    });

});