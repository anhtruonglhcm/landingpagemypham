jQuery(document).ready(function ($) {
  if ($(window).scrollTop() > 1000) {
    $("#back-to-top").fadeIn();
  } else {
    $("#back-to-top").fadeOut();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  $("#back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});
$(function () {
  $(".dangkyngay").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("form").offset().top - 200,
      },
      600
    );
  });
  $("#menudangky").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $("form").offset().top - 200 }, 600);
  });
});
// menu

$(function () {
  $("#menugioithieu").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $(".phan12").offset().top - 100 },
      600
    );
  });
  $("#menuquyenloi").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(".phan10").offset().top }, 600);
  });
  $("#menuchatluong").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(".phan9").offset().top }, 600);
  });
});
