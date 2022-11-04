const inboxEl = document.querySelector('.inbox');
const itemEl = document.querySelectorAll('input[type="checkbox"]');
const submitBtn = document.querySelector('.js-btn');
const inputBoxEl = document.querySelector('.search2');
console.log(submitBtn, inputBoxEl);

submitBtn.addEventListener('click', () => {
  if (!inputBoxEl.value) {
    return 'nothing';
  }
  const markup = `
    <div class="item">
    <input type="checkbox" />
    <p>${inputBoxEl.value}</p>
    </div>`;
  inboxEl.insertAdjacentHTML('afterbegin', markup);
  inputBoxEl.value = '';
});

inboxEl.addEventListener('click', checkBoxHendler);

function checkBoxHendler(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName !== 'INPUT') {
    return;
  }
  event.target.nextElementSibling.classList.toggle('haha');
}

// itemEl.forEach(el => {
//     el.addEventListener('change', (event)=>{

//     event.target.nextElementSibling.classList.toggle('haha')

//         // if(event.target.checked){
//         //     event.target.nextElementSibling.classList.add('haha')
//         // }else{
//         //     event.target.nextElementSibling.classList.remove('haha')
//         // }
//     })
// })
