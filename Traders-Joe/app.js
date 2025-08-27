let hamBtn = document.getElementById('ham-btn-desk');
let crossBtn = document.getElementById('corss-btn-desk');

let hamBtnMob = document.getElementById('ham-btn-mob');
let crossBtnMob = document.getElementById('corss-btn-mob');
let mobOffCanvas = document.getElementById('off-mobile');

let offCanvas = document.getElementById('my-menu-offcanvas1');
let myNav = document.getElementById('myNav');
let bookmark = document.getElementById('bookmark');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.add('d-none');
  crossBtn.classList.remove('d-none');
  offCanvas.classList.add('active');
  myNav.classList.add('bg-nav-cream');
  document.body.classList.add('menu-open');
});
crossBtn.addEventListener('click', () => {
  crossBtn.classList.add('d-none');
  hamBtn.classList.remove('d-none');
  offCanvas.classList.remove('active');
  myNav.classList.remove('bg-nav-cream');
  document.body.classList.remove('menu-open');
});
hamBtnMob.addEventListener('click', () => {
  hamBtnMob.classList.add('d-none');
  crossBtnMob.classList.remove('d-none');
  mobOffCanvas.classList.add('active');
  myNav.classList.add('bg-nav-cream');
  document.body.classList.add('menu-open');
});
crossBtnMob.addEventListener('click', () => {
  crossBtnMob.classList.add('d-none');
  hamBtnMob.classList.remove('d-none');
  mobOffCanvas.classList.remove('active');
  myNav.classList.remove('bg-nav-cream');
  document.body.classList.remove('menu-open');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    bookmark.classList.remove('one');
    bookmark.classList.add('zero');
  } else if (window.scrollY === 0) {
    bookmark.classList.add('one');
    bookmark.classList.remove('zero');
  }
});


// window.addEventListener('resize', setBookmarkTop);
// window.addEventListener('scroll', setBookmarkTop);

// function setBookmarkTop() {
//   const navbar = document.getElementById('myNav');
//   const bookmark = document.getElementById('bookmark');
//   if (navbar && bookmark) {
//     const navHeight = navbar.offsetHeight;
//     bookmark.style.top = 50 + navHeight + 'px';
//   }
// }
// setBookmarkTop();
