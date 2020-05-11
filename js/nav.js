function activateOffCanvasNav() {
  var hamburger = document.querySelector('#hamburger-icon');
  var offCanvasWrapper = document.querySelector('#off-canvas-wrapper');

  hamburger.classList.toggle('active');
  offCanvasWrapper.classList.toggle('responsive');
}

function activateSubmenu() {
   this.classList.toggle('dropdown');
}

// INITIALIZERS 

$(document).ready(function () {
  $('#hamburger-icon').click(activateOffCanvasNav);
  $('.has-submenu').click(activateSubmenu);
});
