// Sanity Check
console.log('app.js linked');

$(document).ready(function(){

  $('.first-bg').hide();
  $('.first-bg').fadeIn(3000, function(e){
    $('.arrow').fadeIn(1000);
    $('.arrow').removeClass('hide');
  });

  $('.arrow').on('scroll', function(e){
    $('.arrow').fadeOut(1000);
  })

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.modal').modal();

}); // closes document on ready
