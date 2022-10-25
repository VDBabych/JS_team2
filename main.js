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

// // console.log(user);

// // Задание развернуть массив без создания нового массива

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// // console.log(numbers.reverse());

// for (let i = 0; i < numbers.length/2; i += 1) {
//     let template = numbers[i];
//     numbers[i] = numbers[numbers.length - 1 - i];
//     numbers[numbers.length - 1 - i] = template;

// }

// console.log(numbers);

// const people = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//нарцис  'Jhon'

// const people1 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: [],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса'

// const people3 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Eva'],
//   },
//   {
//     name: 'Jhon',
//     know: [],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса

// const people4 = [
//   {
//     name: 'Alex',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Jhon',
//     know: ['Eva'],
//   },
//   {
//     name: 'Eva',
//     know: ['Alex', 'Jhon'],
//   },
//   {
//     name: 'Ivan',
//     know: ['Jhon', 'Eva'],
//   },
// ];
//немає нарциса'
// Нарциса знають всі, нарцис незнає нікого

// const findNarcissus = (arr) => {
//     let narcissus = "";
//     for (let obj of arr) {
//         if(obj.know.length === 0) {
//             narcissus = obj.name
//         }
//     }
//     if (!narcissus) return 'немає нарциса'
//     for (let obj of arr) {
//         if(obj.name === narcissus) {
//             continue
//         }
//         if(!obj.know.includes(narcissus)) {
//             return "немає нарциса"
//         }
//     }
//     return narcissus
// }

// console.log(findNarcissus(people4));

//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

// const superObj = { a: 1, b: 2, c: 4, d: 11 };
// const updateObject = function (obj, removeKey) {
//   const newObj = { ...obj };
//   delete newObj[removeKey];
//   return newObj
// }

// console.log(updateObject(superObj, 'b'));;
// console.log(superObj);
// const updateObject = function (obj, removeKey) {
//   const keys = Object.keys(obj);
//   const newObj = {}
//   for (let key of keys) {
//     if (key === removeKey) {
//       continue;
//     }
//     newObj[key] = obj[key];
//   }
//   console.log(newObj);
//   return newObj
// }

// updateObject({ a: 1, b: 2, c: 4, d: 11}, 'b');

// Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     if (!this.a && !this.b) {
//       return 0;
//     }
//     return this.a + this.b;
//   },

//   mult() {
//     if (!this.a && !this.b) {
//       return 0;
//     }
//     return this.a * this.b;
//   },
// };
// calculator.read(2, 5);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());

// Напишіть функцію, яка приймає як параметр об'єкт
//і формує об'єкти у новому масиві у форматі [key, value]
// const user6 = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// function creatObj(obj) {
//   // console.log(Object.entries(obj));
//   const arr = [];
//   for (const key in obj) {
//     arr.push({ [key]: obj[key] });
//   }
//   console.log(arr);
// }
// creatObj(user6);
/*
 * Працю з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items
//     },

//     add(product) {
//         for (let item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return
//             }
//         }
//         this.items.push({ ...product, quantity : 1 })

//     },

//     remove(productName) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i].name === productName) {
//                 this.items.splice(i, 1)
//                 return
//             }
//         }
//     },

//     clear() {
//         this.items = [];
//     },

//     countTotalPrice() {
//         let totalPrice = 0;

//         for (let item of this.items) {
//             totalPrice += item.price*item.quantity
//         }
//         return totalPrice;
//     },

//     increaseQuantity(productName) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i].name === productName) {
//                 this.items[i].quantity += 1;
//                 return
//             }
//         }
//     },

//     decreaseQuantity(productName) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i].name === productName) {
//                 this.items[i].quantity -= 1;
//                 if (this.items[i].quantity === 0) {
//                     this.items.splice(i, 1)
//                     return
//                 }
//             }
//         }
//     }
// }

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// cart.remove('🍋');
// cart.increaseQuantity('🍎');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍎');
// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

/* const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

const smth = ({ model, amount }) => {
    console.log(model, amount);
}

vehicles.forEach(smth); */

//Даний масив із числами. Створіть новий масив, що складається із квадратів цих чисел
//[5, 6, 7, 8, 9]

// function multiply (args) {const newArray = []

//     args.forEach((item)=>{
//         newArray.push(item*item)
//         });    console.log(newArray)
//         return
// }

// multiply([5, 6, 7, 8, 9])

// Даний масив із числами. Числа можуть бути позитивними та негативними. Знайдіть суму позитивних елементів цього масиву. [1, 2 , -5, -7 , -9, 2 , 5 , 4, -69, 85,-5]

// const numbers = [1, 2, -5, -7, -9, 2, 5, 4, -69, 85, -5];
// let sum = 0;
// const sum = function (arr) {
//     let total = 0;
//     arr.forEach((el) => {
//         if (el > 0) {
//             total += el;
//         }

//     })
//     console.log(total);
// }

// sum(numbers);

// function sumOfAll (array, positive, negative)  {
//     let sumPos= 0;
//     let sumNeg = 0;
// for (let i = 0; i < array.length; i++){
// if (array[i] > 0){
//    sumPos+= positive(array[i]);
// }else{
// sumNeg += negative(array[i]);
// }

// }
// console.log([sumPos, sumNeg])
// }

// const checkPositive = (item) => item;

// const checkNegative = (item)=> item;

// sumOfAll(numbers, checkPositive, checkNegative)

// Даний масив з елементами 1, 2, 5, 9, 4, 13, 4, 10. За допомогою циклу foreach та оператора if перевірте, чи є в масиві елемент зі значенням, рівним 4.
// Якщо є - виведіть на екран 'Є!' і вийдіть із циклу.Якщо ні – нічого робити не треба.

// const numbers = [4, 1, 2, 5, 9,  13, 4, 10];

// numbers.forEach((item) => {
//     if (item === 4) {
//         console.log("Є!");
//         return;
//     }
//     console.log(item);
// });

// Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000, 600, 758].
// Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5.

// const numbers = [10, 20, 30, 50, 235, 3000, 600, 758];

// numbers.forEach((item) => {
//     const numberToString = String(item);
//     if (numberToString.startsWith('1') || numberToString.startsWith('2') || numberToString.startsWith('5')) {
//     console.log(numberToString);
//     }

// });

// numbers.forEach((item) => {
//     const numberToString = String(item);
//     if (numberToString[0] === '1' || numberToString[0] === '2' || numberToString[0] === '5') {
//     console.log(item);
//     }
//  });

//Реалізувати фільтр за якістю amount і отримати
// Тільки назва моделі
const vehicles = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const modelName = vehicles
//   .filter(({ amount }) => amount > 12)
//   .map(({ model }) => model);

// console.table(modelName);

// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];

// const filteredNumbers = numbers.filter((number, index, arr) => arr.indexOf(number) === index)
// const newFilteredNumbers = numbers.reduce((acc, number) => {
//   if (!acc.includes(number)) { acc.push(number) } return acc;
// }, [])
//   const newFilteredNumbers = numbers.reduce((acc, number) => !acc.includes(number) ? [...acc, number] : acc, [])
// console.log(filteredNumbers);
// console.log(newFilteredNumbers);