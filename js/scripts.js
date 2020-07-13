// Password Show / Hide

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash field-icon-active");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// Hero Parallax

$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();

  $(".image-parallax").css("background-position",
  `center ${wScroll * .1}px`)
}