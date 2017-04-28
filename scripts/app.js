// Sanity Check
console.log('app.js linked');

$(document).ready(function(){

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('.first-bg').hide();
  $('.first-bg').fadeIn(3000, function(e){
    $('.arrow').fadeIn(1000);
    $('.arrow').removeClass('hide');
  });

  $(window).on('scroll', function(e){
    $('.arrow').fadeOut(1000);
  })


}); // closes document on ready
