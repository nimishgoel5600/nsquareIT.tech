$("#knowMore").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about").offset().top
    },
    2000
  );
});
$("#ourServices").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#service").offset().top
    },
    2000
  );
});
$("#getItNow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top
    },
    2000
  );
});
