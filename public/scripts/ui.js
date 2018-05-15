/* NOTE: User Interface JavaScript: This file contains code that controls
user interface, such as the dropdown menu & jQuery. */

/* Navigation Controls */
function openNav() {
  document.getElementById("nav").style.width = "100vw";
}
function closeNav() {
  document.getElementById("nav").style.width = "0vw";
}


/* jQuery */
$(document).ready(function(){
  console.log('jQuery working!');

  $.ajax({
    method: "GET",
    url: "api/projects",
    success: onSuccess(),
    // error: onError()
  });

  function onSuccess(res){
    console.log('good job, ajax: '+res);
  }
  function onError(err){
    console.log("failjax: "+err);
  }

}); // closes document.ready();
