$(function () {
  $(".main__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="./img/arrows-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="./img/arrows-right.svg" alt="" />',
  });

  $(".menu-btn").on("click", function () {
    $(".header__bottom-right").toggleClass("active");
  });

  new WOW().init();
});
