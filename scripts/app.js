// Sanity Check
console.log('app.js linked');

$(document).ready(function(){


  $('.parallax').parallax();
  $('.modal').modal();

  $('.arrow').fadeIn(2000);
  $('.arrow').removeClass('hide');

  $(window).on('scroll', function(e){
    $('.arrow').fadeOut(500);
  })

  var options = [
    {selector: '#page-one', offset: 50, callback: function(el) {
      Materialize.toast("Welcome to my website! Scroll down to continue.", 2000 );
    } },
    {selector: '#page-five', offset: 300, callback: function(el) {
      Materialize.toast("Thank you for visiting.", 3000 );
      Materialize.toast("The icons below provide additional contact information.", 5000 );
    } }
  ];
  Materialize.scrollFire(options);

}); // closes document on ready
