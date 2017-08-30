$('.wai-nav-icon').on('click', function() {
  $('.wai-nav-list').slideToggle(300);
});

$(window).scroll(function () {
    var $nav = $('.wai-nav').offset().top;
    var $heroOff = $('.hero').offset().top - 90;
    if ($nav > $heroOff) {
        $('.wai-nav').addClass('nav-hide');
    } else {
        $('.wai-nav').removeClass('nav-hide');
    }
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".wai-nav");
    $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
  });
});