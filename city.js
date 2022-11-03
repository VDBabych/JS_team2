import cityList from './city.json' assert { type: "json" }
// console.log(cityList);

const formEl = document.querySelector('.search-form');
const list = document.querySelector('.suggestions');
const info = document.querySelector('.info')

const handleInput = function (event) {

    const userInput = event.target.value.toLowerCase().trim();
    console.log(userInput);
    info.classList.add('is-hidden')
    if (!userInput) {
        list.innerHTML = `<li>Filter for a city</li>
        <li>or a state</li>`;
        return
    }
    const filteredArray = cityList.filter((el) => el.city.toLowerCase().includes(userInput) || el.state.toLowerCase().includes(userInput))
    const markup = filteredArray
        .map(({ city, state, population }) => {
            return `<li><span class="name">${city}, ${state}</span>
            <span class="population">${population}</span></li>
            `
        }).join('');
    list.innerHTML = markup
    if (!filteredArray.length) {
        info.classList.remove('is-hidden')
    } 
    console.log(filteredArray);
}

formEl.addEventListener('input', handleInput)



