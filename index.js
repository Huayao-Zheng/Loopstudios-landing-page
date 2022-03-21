const body = document.querySelector('body');
const nav = document.querySelector(' nav');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const openMenuIcon = document.querySelector('.open-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');

openMenuIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);
window.addEventListener('scroll', onscrollStyle);

function openMenu() {
  body.style.overflow = 'hidden';
  setTimeout(() => (mobileMenu.style.display = 'flex'), 300);
  openMenuIcon.style.display = 'none';
  closeMenuIcon.style.display = 'inline-block';
  nav.classList.add('active');
}

function closeMenu() {
  body.style.overflow = 'auto';
  setTimeout(() => (mobileMenu.style.display = 'none'), 300);
  openMenuIcon.style.display = 'inline-block';
  closeMenuIcon.style.display = 'none';
  nav.classList.remove('active');
}

function onscrollStyle() {
  nav.classList.toggle('on-scroll-style', window.scrollY > 0);
}
