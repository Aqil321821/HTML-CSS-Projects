let videoDesk = document.getElementById('video-desk');
let pausePlayBtn = document.getElementById('pause-play');
let pauseIcon = document.getElementById('pause');
let playIcon = document.getElementById('play');

pausePlayBtn.addEventListener('click', () => {
  if (!videoDesk.paused) {
    videoDesk.pause();
    playIcon.classList.remove('d-none');
    pauseIcon.classList.add('d-none');
  } else {
    videoDesk.play();
    playIcon.classList.add('d-none');
    pauseIcon.classList.remove('d-none');
  }
});

let soundBtn = document.getElementById('sound-btn');
let muteIcon = document.getElementById('muteIcon');
let unmuteIcon = document.getElementById('unmuteIcon');

soundBtn.addEventListener('click', () => {
  console.log(videoDesk.muted);
  if (videoDesk.muted) {
    videoDesk.muted = false;
    muteIcon.classList.remove('d-none');
    unmuteIcon.classList.add('d-none');
  } else {
    videoDesk.muted = true;
    muteIcon.classList.add('d-none');
    unmuteIcon.classList.remove('d-none');
  }
});
