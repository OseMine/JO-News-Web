// Toggle Mobile Menu
const open_menu = document.querySelector('.open-menu');
const close_menu = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');
document.defaultView

open_menu.addEventListener('click', toggleMenu);
close_menu.addEventListener('click', toggleMenu);


function toggleMenu () {
  navbar.classList.toggle('is-active');
}