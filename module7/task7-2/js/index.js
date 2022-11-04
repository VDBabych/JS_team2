const keyList = document.querySelector(".key__list");

const handleClick = (e) => {
  if (e.target.nodeName === "UL") {
    return;
  }
  const item = e.target.closest(".key__item");
  item.classList.add("playing");

  playSound(item.dataset.key)
};

const removeTransition = (e) => {
  if (e.propertyName === 'transform') {
    return
  }
  e.target.classList.remove('playing')
}

const handleKeydown = (e) => {
  playSound(e.keyCode)
  const item = document.querySelector(`li[data-key="${e.keyCode}"]`)
  item.classList.add('playing')
}

function playSound (key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.currentTime = 0;
  audio.play();
}


document.addEventListener("keydown", handleKeydown)

keyList.addEventListener("click", handleClick);
keyList.addEventListener("transitionend", removeTransition);