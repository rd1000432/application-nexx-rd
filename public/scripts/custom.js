// sidebar menu and overlay for main content toggles
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let overlay = document.querySelector('.main-content');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    overlay.classList.toggle('overlay-container');
}



// accordion - one open at a time
let acc = document.getElementsByClassName('nexxar-accordion');
let panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

const setClass = (els, className, fnName) => {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
