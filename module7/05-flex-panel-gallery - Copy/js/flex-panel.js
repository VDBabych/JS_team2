const divEl = document.querySelector('.panels');

divEl.addEventListener('click', handleClick);

function handleClick(event) {
  const isActive = document.querySelector('.open');

  if (isActive) {
    isActive.classList.remove('open');
  }

  const panel = event.target.closest('.panel');

  if (isActive === panel) {
    isActive.classList.remove('open');
    return;
  }

  if (!panel) {
    return;
  }
  panel.classList.add('open');
}
