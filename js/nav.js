function activateOffCanvasNav() {
  var hamburger = document.querySelector('#hamburger-icon');
  var offCanvasWrapper = document.querySelector('#off-canvas-wrapper');

  hamburger.classList.toggle('active');
  offCanvasWrapper.classList.toggle('responsive');
}

function activateSubmenu() {
   this.classList.toggle('dropdown');
}







$(document).ready(function () {
  $('#hamburger-icon').click(activateOffCanvasNav);
  $('.has-submenu').click(activateSubmenu);
});



// function activateOffCanvasNav(e) {
//   console.log('in off canvas function')
//   e.currentTarget.classList.toggle('active');
//   console.log('hamburger active')
//
//   // var mainMenu = document.getElementById("nav");
//   //
//   // if (mainMenu.className === "nav") {
//   //   mainMenu.className += " off-canvas";
//   // } else {
//   //   mainMenu.className = "nav";
//   // }
//   //
//   // if (mainMenu.classList.contains("off-canvas")) {
//   //   document.getElementById("off-canvas-wrapper").style.height = "100%";
//   // } else {
//   //   document.getElementById("off-canvas-wrapper").style.height = "auto";
//   // }
//
// }
//
// function activateSubmenu(e) {
//    e.classList.toggle("dropdown");
// }
//
// document.getElementById('hamburger-icon').addEventListener('click', activateOffCanvasNav(getElementById('hamburger-icon')));
//
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('loaded')
// });
