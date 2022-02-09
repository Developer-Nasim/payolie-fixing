$(document).ready(function() {

    // Help Categories
    $('.help-categories .help-category .help-category-top').on('click', function() {
        if($(this).parent().hasClass('active')) {
            $('.help-categories .help-category').removeClass('active');
            $('.help-categories .help-category .help-category-bottom .help-category-points .help-category-point').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $('.help-categories .help-category').removeClass('active');
            $('.help-categories .help-category .help-category-bottom .help-category-points .help-category-point').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.help-categories .help-category .help-category-bottom .help-category-points .help-category-point .help-category-point-top button').on('click', function() {        
        if($(this).parent().parent().hasClass('active')) {
            $('.help-categories .help-category .help-category-bottom .help-category-points .help-category-point').removeClass('active');
            $(this).parent().parent().removeClass('active');
        } else {
            $('.help-categories .help-category .help-category-bottom .help-category-points .help-category-point').removeClass('active');
            $(this).parent().parent().addClass('active');
        }
    });

});