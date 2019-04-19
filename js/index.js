$(document).ready(function(){
  $("i.fa-bars").click(function showNav(){
    $("nav").show(1000);
    $("i.fa-times").show(1000);
    $("i.fa-bars").hide();

  });
  $("i.fa-times").click(function hideNav(){
    $("i.fa-bars").show(1000);
    $("nav").hide(1000);
    $("i.fa-times").hide(1000);

  });
});

$("#slideshow > section:gt(0)").hide();

setInterval(function() {
  $('#slideshow > section:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
