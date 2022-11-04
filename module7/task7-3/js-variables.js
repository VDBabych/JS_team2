const formEl = document.querySelector('.main-form');

function onInputChange(event) {
   const { target } = event;
    console.log(target.name, target.value);
    document.documentElement.style.setProperty(`--${target.name}`, `${target.value}`)
}

formEl.addEventListener('input', onInputChange)