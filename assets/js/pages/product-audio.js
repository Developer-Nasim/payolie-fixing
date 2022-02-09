$(document).ready(function() {

    // Product Versions
    const product_descriptions = [
        `
        <p>&bull; Standard Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim libero maximus pulvinar quam in, ornare tempus risus.</p>
        <p>&bull; Nunc facilisis accumsan diam quis imperdiet. Aenean ultrices aliquet placerat. Aliquam semper ligula diam.</p>
        <p>&bull; Sed blandit tincidunt ornare. Sed lectus justo, faucibus ornare nulla non semper faucibus quam diam quis imperdiet.</p>
        
        `,

        `
        <p>&bull; Premium Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim libero maximus pulvinar quam in, ornare tempus risus.</p>
        <p>&bull; Nunc facilisis accumsan diam quis imperdiet. Aenean ultrices aliquet placerat. Aliquam semper ligula diam.</p>
        <p>&bull; Sed blandit tincidunt ornare. Sed lectus justo, faucibus ornare nulla non semper faucibus quam diam quis imperdiet.</p>
        
        `,

        `
        <p>&bull; Exclusive Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim libero maximus pulvinar quam in, ornare tempus risus.</p>
        <p>&bull; Nunc facilisis accumsan diam quis imperdiet. Aenean ultrices aliquet placerat. Aliquam semper ligula diam.</p>
        <p>&bull; Sed blandit tincidunt ornare. Sed lectus justo, faucibus ornare nulla non semper faucibus quam diam quis imperdiet.</p>
        
        `
    ];

    $('.product .container .product-top .product-info .versions .version').on('click', function() {
        if($(this).attr('data-val') === 'standard') {
            $('.product-description').html(product_descriptions[0]);
        } else if($(this).attr('data-val') === 'premium') {
            $('.product-description').html(product_descriptions[1]);
        } else if($(this).attr('data-val') === 'exclusive') {
            $('.product-description').html(product_descriptions[2]);
        }
        
        $('.product .container .product-top .product-info .versions .version').removeClass('active');
        $(this).addClass('active');
    });

});