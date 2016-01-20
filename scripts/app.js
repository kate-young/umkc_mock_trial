$('.scroll').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget:  $(this).attr('href')
    });
    return false;
});
