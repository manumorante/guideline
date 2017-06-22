(function($) {

  var $siteSelector = $('.js-site-selector');

  $siteSelector.on('change', function() {
    var cssFile = this.value;
    $('.js-css-file').attr('href', cssFile);
  });

})($);
