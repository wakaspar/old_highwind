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
      Materialize.toast("Welcome to Will Kaspar's personal website!", 2500 );
    } },
    {selector: '#page-five', offset: 715, callback: function(el) {
      Materialize.toast("Thank you for visiting. The footer icons provide more info", 2500 );
    } }
  ];
  Materialize.scrollFire(options);


}); // closes document on ready
