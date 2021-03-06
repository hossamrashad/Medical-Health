/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

// button scroll to top
$(document).ready(function () {
  "use strict";
  $(window).scroll(function () {
    var buttonScroll = $(".scroll-to-top");
    if ($(window).scrollTop() >= 500) {
      if (buttonScroll.is(":hidden")) {
        buttonScroll.fadeIn(400);
      }
    } else {
      buttonScroll.fadeOut(400);
    }
  });
  $(".scroll-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // dynamic tab
  $(".tabs-list li").on("click", function () {
    console.log($(this).data("content"));
    $(this).addClass("active").siblings().removeClass("active");
    $(".content-list > div").hide();
    $($(this).data("content")).fadeIn();
  });

  // popup
  $(".show-popup").on("click", function () {
    $($(this).data("popup")).fadeIn();
  });

  $(".popup").on("click", function () {
    $(this).fadeOut();
  });

  $(".popup .inner").on("click", function (e) {
    e.stopPropagation();
  });
  $(".popup .fa-close").on("click", function () {
    $(this).parentsUntil(".popup").parent().fadeOut();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $('.popup').fadeOut();
    }
  });
});
