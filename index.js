const nav = document.querySelector(' nav');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const openMenuIcon = document.querySelector('.open-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');

openMenuIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);

function openMenu() {
  mobileMenu.style.display = 'flex';
  openMenuIcon.style.display = 'none';
  closeMenuIcon.style.display = 'inline-block';
  nav.classList.add('active');
}

function closeMenu() {
  setTimeout(() => (mobileMenu.style.display = 'none'), 300);
  openMenuIcon.style.display = 'inline-block';
  closeMenuIcon.style.display = 'none';
  nav.classList.remove('active');
}
