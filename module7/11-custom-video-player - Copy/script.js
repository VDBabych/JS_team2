const player = document.querySelector(`.player`);
const toggle = player.querySelector(`.toggle`);
const video = player.querySelector(`.viewer`);
const timeButton = player.querySelectorAll(`.player__button`)
const changeRangeButton = player.querySelectorAll(`.player__slider`)

const togglePlay = (event) => {
  const method = video.paused ? `play` : `pause`;
  video[method]();
};

function updateButton() {
  const icon = this.paused ? "▶️" : "❚ ❚";
  toggle.innerHTML = icon;
}

function timeChange(event){
    video.currentTime += Number(event.target.dataset.skip)
}

function valueChange(event){
    video[event.target.name] = event.target.value
}

changeRangeButton.forEach(el => el.addEventListener(`input`, valueChange))
timeButton.forEach(el => el.addEventListener(`click`, timeChange))
video.addEventListener(`play`, updateButton);
video.addEventListener(`pause`, updateButton);
video.addEventListener(`click`, togglePlay);
toggle.addEventListener(`click`, togglePlay);