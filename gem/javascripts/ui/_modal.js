(function ($) {

  $('.js-open-modal').on(CLICK_EVENT, function (e) {
    e.preventDefault();

    window.$overlay = $('<div class="overlay"></div>');
    window.$modal = $('.js-modal-' + $(this).data('modal')).clone();

    window.$overlay.appendTo('body');
    window.$modal.appendTo('body');
  });

  $('.js-close-modal').live(CLICK_EVENT, function () {
    window.$overlay.remove();
    window.$modal.remove();
  });

  $('.overlay').live(CLICK_EVENT, function () {
    $(this).remove();
  });

})($);
