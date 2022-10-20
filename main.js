// //Напишіть функцію min(a, b), яка повертає
// //менше з чисел a, b
// //Потрібно додати перевірку, що функція отримує числа
// function min(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         alert("invalid")
//         return
//     }
//     return Math.min(a, b);
//     // return a < b ? a : b;
// }

// // console.log(typeof typeof true);

// const result = min(2, 5);
// console.log(result);

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше в масиві
//Додай перевірку що функція отримує масив
/* const numbers = [100, 2, 5, 35, 56, 12, 24, 7, 80, 3]; */

/* function findSmallerNumber(numbers) {
    if (!Array.isArray(numbers)) {
        console.log('Error');
        return 0;
    }

    let num = numbers[0];

    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] < num) {
            num = numbers[i];
        }
    }

    return num;
}

const min = findSmallerNumber("numbers");

console.log(min); */

//Напишіть функцію caculculateAverage()
//яка приймає довільну кількість
//Аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caculculateAverage() {
//     console.log(arguments);
//     let avarege = 0;
//     let count =0;

//     for (let argument of arguments) {
//         if (typeof argument !== "number") {
//             continue
//         }
//         avarege += argument
//         count += 1
//     }
//     console.log((avarege/count).toFixed(1));
// }
// caculculateAverage(2, 5, 7, 'f', 't')

// Створіть масив styles з елементами «Джаз» та «Блюз».
//Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
//Видалить перший елемент масиву і виведіть його в консоль.
//Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// console.log(styles);
// // console.log(styles.push("Рок-н-рол"));
// console.log(styles.splice(1, 1, "Класика"));
// console.log(styles);

// // console.log(styles.splice(0, 1)[0]);

// styles.unshift("Реп", "Реггі");
// console.log(styles);



//Напиши скрипт для об'єкта user,
//Послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить вміст об'єкта users у форматі
//ключ:значення використовуючи Object.keys() і for...of
// const user = {
//    name: "John",
//    age: 20,
//    hobby: "tenis",
//    premium: true,
// };

// user.mood = 'happy';

// // user['mood']='happy';

// // const userMood = {} ;
// // user[userMood] = 'happy';

// // user.hobby = 'skydiving';

// // user['hobby'] =  'skydiving';

// const urerHobby = 'hobby';

// user[urerHobby] = 'skydiving';

// const userKeys = Object.keys(user);
 
// for (const key of userKeys) {
//     console.log(`${key}:${user[key]}`);
// }


// console.log(user);

// Задание развернуть массив без создания нового массива

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(numbers.reverse());

for (let i = 0; i < numbers.length/2; i += 1) {
    let template = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i];
    numbers[numbers.length - 1 - i] = template;
    
}

console.log(numbers);
