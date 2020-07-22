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


// Nav Search

function searchNavGrow(el, wid) {
  var element = document.getElementById(el);
  element.style.transition = "all 100ms ease-out";
  element.style.width = wid
  element.style.marginLeft = "0";
}

function searchNavShrink(el, wid) {
  var element = document.getElementById(el);
  element.style.transition = "all 100ms ease-in 100ms";
  element.style.width = wid
  element.style.marginLeft = "40px";
}

function searchNavDropdownShow(el) {
  var element = document.getElementById(el);
  element.style.transition = "all 100ms ease-out 100ms";
  element.style.height = "288px";
}

function searchNavDropdownHide(el) {
  var element = document.getElementById(el);
  element.style.transition = "all 100ms ease-in";
  element.style.height = "0";
}