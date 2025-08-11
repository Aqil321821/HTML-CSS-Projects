var swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let inpSearch = false;
const searchInput = document.getElementById('search-items');
const searchIcon = document.getElementById('search-icon');

function openSearch() {
  if (inpSearch === false) {
    document.getElementById('btnSearch').classList.add('d-none');
    document.getElementById('inpSearch').classList.remove('d-none');
    document.getElementById(
      'box-shadow'
    ).innerHTML = `<div onclick="openSearch()" class="modal-backdrop fade show z-0"></div>`;
    searchInput.value = '';
    inpSearch = true;
  } else {
    document.getElementById('btnSearch').classList.remove('d-none');
    document.getElementById('inpSearch').classList.add('d-none');
    document.getElementById('box-shadow').innerHTML = ``;
    searchInput.value = '';
    searchInput.value ? (searchIcon.style.display = 'none') : (searchIcon.style.display = 'inline-block');

    inpSearch = false;
  }
}

searchInput.addEventListener('input', () => {
  if (searchInput.value.trim().length > 0) {
    searchIcon.style.display = 'none';
  } else {
    searchIcon.style.display = 'inline-block';
  }
});
