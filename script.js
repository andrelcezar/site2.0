// Alternar menu mobile
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navmenu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});