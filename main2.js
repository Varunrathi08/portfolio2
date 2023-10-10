$(document).on('scroll', function(){
    console.log(window.scrollY);
    $('h1').css("left", Math.max(12400 - 6.2*window.scrollY, 100)
      + "px");
});