document.addEventListener('DOMContentLoaded', function () {
  const bars = document.getElementById('bars');
  const toggler = document.getElementById('toggler');

  bars.addEventListener('click', function () {
    toggler.classList.toggle('active');
  });
});
