const formEl = document.querySelector('.main-form');

function onInputChange(event) {
   const { target } = event;
   const size = target.dataset.sizing ?? ``
    console.log(target.name, target.value);
    document.documentElement.style.setProperty(`--${target.name}`, `${target.value}${size}`)
}

formEl.addEventListener('input', onInputChange)