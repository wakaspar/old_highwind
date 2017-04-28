// Sanity Check
console.log('app.js linked');

$(document).ready(function(){

  $('.first-bg').hide();
  $('.first-bg').fadeIn(2000, function(e){
    $('.arrow').fadeIn(1000);
    $('.arrow').removeClass('hide');
  });
  $('.parallax').parallax();
  $('.modal').modal();
  $('.scrollspy').scrollSpy();

  $(window).on('scroll', function(e){
    $('.arrow').fadeOut(1000);
  })


}); // closes document on ready
