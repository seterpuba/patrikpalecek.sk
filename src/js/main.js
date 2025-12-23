// ============================
// MENU TRIGGER
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const menuTrigger = document.querySelector('.header__trigger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.mobile-menu__close');

  if (menuTrigger && mobileMenu) {
    menuTrigger.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
    });
  }

  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  }
});