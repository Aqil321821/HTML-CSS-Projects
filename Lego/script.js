// document.getElementById('toggle-debug').addEventListener('click', function () {
//   document.body.classList.toggle('debug');
// });

new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
new Swiper('#slider2', {
  slidesPerView: 'auto', // slides ki width CSS se aayegi
  spaceBetween: 20, // slides ke beech ka gap
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
    snapOnRelease: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

new Swiper('#slider3', {
  slidesPerView: 'auto', // slides ki width CSS se aayegi
  spaceBetween: 20, // slides ke beech ka gap
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar-3',
    draggable: true,
    hide: false,
    snapOnRelease: false,
  },
});
new Swiper('#slider4', {
  slidesPerView: 'auto', // slides ki width CSS se aayegi
  spaceBetween: 20, // slides ke beech ka gap
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar-4',
    draggable: true,
    hide: false,
    snapOnRelease: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

const swiper5 = new Swiper('#slider5', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  // scrollbar
  scrollbar: {
    el: '.bar-5',
    draggable: true,
  },

  // navigation
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
// state to rep hide/show state of input bar
let inpSearch = false;

function openSearch() {
  if (!inpSearch) {
    document.getElementById('btnSearch').classList.add('d-none');
    document.getElementById('inpSearch').classList.remove('d-none');
    document.getElementById('box-shadow').innerHTML =
      '<div onclick="openSearch()"  class="modal-backdrop fade show"></div>';
    inpSearch = true;
  } else {
    document.getElementById('btnSearch').classList.remove('d-none');
    document.getElementById('inpSearch').classList.add('d-none');
    document.getElementById('box-shadow').innerHTML = '';
    inpSearch = false;
  }
}

// for res
let inpSearchRS = false;

function openSearchRS() {
  if (!inpSearchRS) {
    document.getElementById('btnSearchRS').classList.add('d-none');
    document.getElementById('inpSearchRS').classList.remove('d-none');
    document.getElementById('box-shadow').innerHTML =
      '<div onclick="openSearch()"  class="modal-backdrop fade show"></div>';
    inpSearchRS = true;
  } else {
    document.getElementById('btnSearchRS').classList.remove('d-none');
    document.getElementById('inpSearchRS').classList.add('d-none');
    document.getElementById('box-shadow').innerHTML = '';
    inpSearchRS = false;
  }
}

const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const clearBtn = document.getElementById('clearBtn');

// when user starts to write than hide search icon
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    searchIcon.classList.add('d-none');
  } else {
    searchIcon.classList.remove('d-none');
  }
});
//when user clicks on X then empty the field
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchIcon.classList.remove('d-none');
});

// function to hide toppest div
function closeTopbar() {
  let topDiv = document.getElementById('top-div');
  if (!topDiv.classList.contains('d-none')) {
    topDiv.classList.add('d-none');
  }
}

window.addEventListener('resize', () => {
  let topDiv = document.getElementById('top-div');
  if (topDiv.classList.contains('d-none')) {
    if (window.innerWidth >= 991) {
      topDiv.classList.remove('d-none');
      // alert('hello');
    }
  }
});

//function to animate bars when btn is clicked
function animateBars() {
  let bar_1 = document.querySelector('.icon-bar-1');
  let bar_2 = document.querySelector('.icon-bar-2');
  let bar_3 = document.querySelector('.icon-bar-3');

  bar_1.classList.toggle('icon-bar-1-active');
  bar_2.classList.toggle('icon-bar-2-active');
  bar_3.classList.toggle('icon-bar-3-active');
}

// scroll reset:
// Save scroll position
window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPos', window.scrollY);
});

// Restore scroll position
window.addEventListener('load', () => {
  const scrollPos = localStorage.getItem('scrollPos');
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos));
    localStorage.removeItem('scrollPos');
  }
});
