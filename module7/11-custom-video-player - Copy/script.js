const player = document.querySelector(`.player`);
const toggle = player.querySelector(`.toggle`);
const video = player.querySelector(`.viewer`);
const timeButton = player.querySelectorAll(`button[data-skip]`);
const changeRangeButton = player.querySelectorAll(`.player__slider`);
const timeBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress');

let mouseDown = false;

const togglePlay = event => {
  const method = video.paused ? `play` : `pause`;
  video[method]();
};

function updateButton() {
  const icon = this.paused ? '▶️' : '❚ ❚';
  toggle.innerHTML = icon;
}

function timeChange(event) {
  video.currentTime += Number(event.target.dataset.skip);
}

function valueChange(event) {
  video[event.target.name] = event.target.value;
}

function changeLine(event) {
  const percent = (video.currentTime / video.duration) * 100;
  timeBar.style.flexBasis = `${percent}%`;
  // console.log(percent);
}

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(event.offsetX);
}

changeRangeButton.forEach(el => el.addEventListener(`input`, valueChange));
timeButton.forEach(el => el.addEventListener(`click`, timeChange));
video.addEventListener(`play`, updateButton);
video.addEventListener(`pause`, updateButton);
video.addEventListener(`click`, togglePlay);
toggle.addEventListener(`click`, togglePlay);
video.addEventListener('timeupdate', changeLine);
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => {
  mouseDown = true;
});
progress.addEventListener('mouseup', () => {
  mouseDown = false;
});
progress.addEventListener('mousemove', event => {
  if (mouseDown) {
    scrub(event);
  }
});
