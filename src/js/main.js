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

// ============================
// HEADER STICKY
// ============================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header'); // Uisti sa, že tvoj tag je <header> alebo použi .header

  const handleScroll = () => {
    if (window.scrollY > 50) { // Pridá class po odscrollovaní 50px
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  // Spustíme pri scrolle
  window.addEventListener('scroll', handleScroll);
  
  // Spustíme aj pri načítaní (keby user refreshol stránku už odscrollovaný)
  handleScroll();
});