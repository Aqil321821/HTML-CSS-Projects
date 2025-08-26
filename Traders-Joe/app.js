let hamBtn = document.getElementById('ham-btn');
let crossBtn = document.getElementById('corss-btn');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.add('d-none');
  crossBtn.classList.add('d-block');
});
