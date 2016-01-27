$('.scroll').on('click', function() {
    $.smoothScroll({
        scrollTarget:  $(this).attr('href'),
        easing: 'swing',
        speed: 900
    });
    return false;
});

sticky(document.getElementById('header'));
