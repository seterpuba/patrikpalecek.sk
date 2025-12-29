document.addEventListener('DOMContentLoaded', () => {
  
  // ELEMENTY
  const header = document.querySelector('header');
  const menuTrigger = document.querySelector('.header__trigger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.mobile-menu__close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a'); // Všetky odkazy v mobilnom menu

  // ============================
  // HEADER STICKY
  // ============================
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Spustenie pri načítaní

  // ============================
  // MENU TRIGGER & AUTO-CLOSE
  // ============================
  
  // Otvorenie menu
  if (menuTrigger && mobileMenu) {
    menuTrigger.addEventListener('click', () => {
      mobileMenu.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Voliteľné: zabráni scrollu pozadia pri otvorenom menu
    });
  }

  // Funkcia na zatvorenie menu
  const hideMenu = () => {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = 'auto'; // Vráti scroll pozadia
  };

  // Zatvorenie cez krížik
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', hideMenu);
  }

  // NOVÉ: Zatvorenie menu po kliknutí na akýkoľvek odkaz (kotvu)
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
  });
});