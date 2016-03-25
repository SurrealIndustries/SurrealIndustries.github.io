function adjust_body_offset() {
  $("body").css("padding-top", $(".navbar-default").outerHeight(!0) + "px");
}
$(window).resize(adjust_body_offset);
$(document).ready(function() {
  adjust_body_offset();
});