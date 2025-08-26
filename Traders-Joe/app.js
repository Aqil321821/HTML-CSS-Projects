let hamBtn = document.getElementById('ham-btn');
let crossBtn = document.getElementById('corss-btn');
let offCanvas = document.getElementById('my-menu-offcanvas1');
let myNav = document.getElementById('myNav');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.add('d-none');
  crossBtn.classList.remove('d-none');
  offCanvas.classList.add('active');
  myNav.classList.add('bg-nav-cream');
});
crossBtn.addEventListener('click', () => {
  crossBtn.classList.add('d-none');
  hamBtn.classList.remove('d-none');
  offCanvas.classList.remove('active');
  myNav.classList.remove('bg-nav-cream');
});
