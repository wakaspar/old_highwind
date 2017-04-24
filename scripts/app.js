// Sanity Check
console.log('app.js linked');

$(document).ready(function(){
  $('.first-bg').hide();
  $('.first-bg').fadeIn(3000);

  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();

}); // closes document on ready
