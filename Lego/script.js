document.getElementById('toggle-debug').addEventListener('click', function () {
  document.body.classList.toggle('debug');
});

var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// state to rep hide/show state of input bar
let inpSearch = false;

function openSearch() {
  if (!inpSearch) {
    document.getElementById('btnSearch').classList.add('d-none');
    document.getElementById('inpSearch').classList.remove('d-none');
    document.getElementById('box-shadow').innerHTML =
      '<div onclick="openSearch()" style="z-index: 0 !important" class="modal-backdrop fade show"></div>';
    inpSearch = true;
  } else {
    document.getElementById('btnSearch').classList.remove('d-none');
    document.getElementById('inpSearch').classList.add('d-none');
    document.getElementById('box-shadow').innerHTML = '';
    inpSearch = false;
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
