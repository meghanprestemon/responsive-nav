document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  document.getElementById('hamburger-icon').addEventListener('click', activateOffCanvasNav)
});

function activateOffCanvasNav(e) {
  console.log('in off canvas function')
  e.currentTarget.classList.toggle('active');
  console.log('hamburger active')

  // var mainMenu = document.getElementById("nav");
  //
  // if (mainMenu.className === "nav") {
  //   mainMenu.className += " off-canvas";
  // } else {
  //   mainMenu.className = "nav";
  // }
  //
  // if (mainMenu.classList.contains("off-canvas")) {
  //   document.getElementById("off-canvas-wrapper").style.height = "100%";
  // } else {
  //   document.getElementById("off-canvas-wrapper").style.height = "auto";
  // }

}

function activateSubmenu(e) {
   e.classList.toggle("dropdown");
}
