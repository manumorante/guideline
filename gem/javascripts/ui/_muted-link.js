(function ($) {

    $('.js-muted-link').live(CLICK_EVENT, function (e) {
        e.preventDefault();
        console.log('Muted link');
    });

})($);
