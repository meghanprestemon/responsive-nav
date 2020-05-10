function activateOffCanvasNav() {
  this.classList.toggle('active');

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

const el = document.querySelector('.hamburger-icon');

el.onclick = () => el.classList.toggle('active');

document.querySelector('#nav-toggle').addEventListener('click', activateOffCanvasNav);
