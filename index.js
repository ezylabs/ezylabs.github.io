// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');
  const menuLinks = document.querySelectorAll('.navbar-menu a'); // Select all menu links

  function closeMenu() {
    for (let j = 0; j < menu.length; j++) {
      menu[j].classList.add('hidden'); // Ensure the menu closes
    }
  }

  if (close.length) {
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', closeMenu);
    }
  }

  if (backdrop.length) {
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', closeMenu);
    }
  }

  // Close menu when any menu link is clicked
  if (menuLinks.length) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', closeMenu);
    }
  }
});

// Static nav on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.style.background =
      'linear-gradient(112.84deg, #46BAEB 0.33%, #AF2CFF 38.23%, #F790AF 65.22%, #C1ABFF 100%)';
  } else {
    navbar.style.background = 'transparent'; // reset to transparent when not scrolled
  }
});
