$(document).ready(function() {
$("#hamburger").click(function() {
  $(this).toggleClass('animate');
  $(".ul-nav-pri").toggleClass("mobilenav");
});
}