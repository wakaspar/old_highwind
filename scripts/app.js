// Sanity Check
console.log('app.js linked');

$(document).ready(function(){

  $('.first-bg').hide();
  $('.first-bg').fadeIn(3000);

  // $('.project-two').addClass('hide');
  // $('.project-three').addClass('hide');


  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
   $('.carousel').carousel();

  // var projectState = 0;
  // projectSlide(projectState);
  //
  // $('.prev-link').on('click', function(e){
  //   if (projectState != 0) {
  //     projectState--;
  //     console.log(projectState);
  //     projectSlide(projectState);
  //   }
  // });
  //
  // $('.next-link').on('click', function(e){
  //   if (projectState < 2) {
  //     projectState++;
  //     console.log(projectState);
  //     projectSlide(projectState);
  //   };
  // });
  //
  // function projectSlide(state){
  //   if (state == 0) {
  //     $('.project-one').removeClass('hide');
  //     $('.project-two').addClass('hide');
  //     $('.project-three').addClass('hide');
  //   } else if (state == 1) {
  //     $('.project-one').addClass('hide');
  //     $('.project-two').removeClass('hide');
  //     $('.project-three').addClass('hide');
  //   } else if (state == 2) {
  //     $('.project-one').addClass('hide');
  //     $('.project-two').addClass('hide');
  //     $('.project-three').removeClass('hide');
  //   }
  // }

}); // closes document on ready
