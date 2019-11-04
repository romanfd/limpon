$(document).ready(function () {

  // Burger menu
  $(".burger-menu").click(function () {
    $(".burger-menu").toggleClass("burger-menu--active");
  });

  // Molie link -> Burger menu close
  $(".nav__link").click(function () {
    $(".burger-menu").removeClass("burger-menu--active");
  });

  // Team block - Social buttons
  $(".btn--plus").click(function () {
    $(".social__list").fadeIn(1000).css("display", "flex");
    $(".btn--plus").fadeOut(1000).css("display", "none");
  });

  // Back to Top Button with Smooth Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // Header background color
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });

});
