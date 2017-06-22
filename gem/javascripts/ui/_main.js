// Header margin
var headerMargin = 70;

// Highlighting code library
hljs.initHighlightingOnLoad();

// Define classname for smooth scroll option
$('.scrollTo').on(CLICK_EVENT, function (e) {
  e.preventDefault();
  smoothScroll($(window), $($(e.currentTarget).attr('href')).offset().top - headerMargin, 350);
});

