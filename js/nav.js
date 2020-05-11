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

document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('#hamburger-icon').addEventListener('click', activateOffCanvasNav);
   document.querySelector('.has-submenu').addEventListener('click', activateSubmenu);
});
