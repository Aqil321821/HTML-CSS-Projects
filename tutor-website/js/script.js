document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  btn.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

// change naavbar background color on scrll
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
