$(document).ready(function () {
  $('.projects__item').magnificPopup({
    delegate: '.js-open-popup', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: { enabled: true }
  });
});
