// Selectors
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
let showMenu = false;

//Event Listeners
menuBtn.addEventListener('click', toggleMenu)

//Functions
function toggleMenu(event) {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}