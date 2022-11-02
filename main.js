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

// Отримати авто на розпродажі і сортувати за зменшенням ціни
/* const vehicles = [
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

const carOnSale = vehicles.filter(({ onSale }) => onSale).sort(({ price: a}, {price: b}) => a - b);

console.table(carOnSale); */

//Призначити знижку 20% на фрукти в масиві,
//Присвоїти ID для кожного продукту
// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

/* const newPrices = fruits.reduce((acc, fruit)=>{acc.push({...fruit, price: fruit.price*0.8, id:Date.now()}); return acc},[])
console.log(newPrices) */

/* const newPrices = fruits.reduce((acc, fruit)=> [...acc, {...fruit, price: fruit.price*0.8, id:Date.now()}], [])
console.log(newPrices) */

// const newPrices = fruits.map(fruit=> ({...fruit, price: fruit.price*0.8, id:Date.now()}))
// console.log(newPrices)

// Виправте помилки, щоб код працював
// const product = {
// price: 5000,
// showPrice() {
// console.log(this.price);
// },
// };
// product.showPrice();

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));

// Яким буде результат при зверненні до об'єкта ref? Чому?

// function makeUser() {
//   console.log(this);
//   return {
//     name: "John",
//     ref () {
//       return this
//     }
//   };
// }

// let user = makeUser();

// console.log( user().ref.name )
// console.log(user.ref().name);

//Потрібно перевірити "same" масиви
// числа з першого в квадраті дорівнюють числам другого

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const fnA = (a, b) => {
//   const var1 = [...a].sort((a, b) => a - b);
//   const var2 = [...b].sort((a, b) => a - b);

//   for (let i = 0; i < var1.length; i += 1) {
//     if (var1[i] * var1[i] !== var2[i]) {
//       return false;
//     }
//   }
//   return true;
//   return var1.map((el) => el * el).every((el, index) => el === var2[index]);
// };

// console.log(fnA(a, b));

// Знайти перший унікальний символ у рядку
//У рядку будуть лише літери латинського алфавіту і вони будуть у lowerCase

let input1 = "leetcode"; //0
let input2 = "loveleetcode"; //2
let input3 = "aabb"; //-1

// function makeMeCoffee (string) {
//   const array = string.split("");
//   console.log(array);
//   const newArray = array.reduce((acc, item) => {
//     console.log(acc);
//     return { ...acc, [item]: acc[item] ? acc[item] + 1 : 1 }
//   }, {})
//   console.log(newArray);
// }

// makeMeCoffee(input1);

// function makeMeCoffee (string) {
//   const array = string.split("");
//   // console.log(array);
//   const newArray = array.reduce((acc, item) => {
//     // console.log(acc);
//     if (acc[item]) {
//       acc[item] = acc[item] += 1;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {})
//   // console.log(newArray);
//   for (const key in newArray) {
//     if (newArray[key] === 1) {
//       return array.indexOf(key);
//     }
//   }
//   return -1;
// }

// const fnA = (input) => {
//   return [...input].indexOf([...input].find((el, i, array) => array.indexOf(el) === array.lastIndexOf(el)));
// };

// const fnA = (input) => {
//   return [...input].indexOf([...input].find((el, i, array) => array.indexOf(el) === array.lastIndexOf(el)));
// };

// const unique = (str) => {
//   const arr = str.split("");
//   const un = arr.find((el) => arr.indexOf(el) === arr.lastIndexOf(el));
//   if (!un) return -1;
//   return arr.indexOf(un)
// };

// console.log(makeMeCoffee(input1));
// console.log(makeMeCoffee(input2));
// console.log(makeMeCoffee(input3));
// console.log(fnA(input1));
// console.log(fnA(input2));
// console.log(fnA(input3));

// Створіть функцію, яка виводитиме нам усіх гравців

// const sport = {
//   tournament: 'The Master',
//   players: [
//     {
//       name: 'Wood',
//       age: 37
//     },
//     {
//       name: 'Mike',
//       age: 43
//     }
//   ],
//   getPlayers() {
//     console.log(this);
//     const arrow = () => { console.log(this); }
//     arrow()
//   },
// };

// sport.getPlayers();

//2. Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

/* function Storange(arg) {
  this.items = arg;
  
} 

Storange.prototype.getItems = function () {
  return this.items;
};
  
Storange.prototype.addItems = function (item) {
  this.items.push(item);
};

Storange.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);

  if (index === -1) {
    return console.log('nohhing');
  } 

  this.items.splice(index, 1);
};

const arr1 = [1, 2, 3];

const store = new Storange(arr1);


store.removeItem(21);
store.addItems(10);
console.log(store.getItems());
 */

// Напиши клас Client який створює об'єкт
//з властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {

//   #email
//   #login
//   constructor ({login, email}) {
//     this.#login = login;
//     this.#email = email
//   }

//   get login () {
//     return this.#login
//   }

//   set login (newLogin) {
//     this.#login = newLogin
//   }

//   get email () {
//     return this.#email
//   }

//   set email (newEmail) {
//     this.#email = newEmail
//   }
// }

// const petya = new Client ({login: "Petya", email: "jjj@gmail.com"})
// console.log(petya);

// petya.login="vasya"
// console.log(petya.login);

// class ClientType extends Client {

//   constructor ({login, email,password}) {
//     super({login, email})
//     this.password = password;
//   }

//   get passwordClient () {
//     return this.password
//   }

//   set passwordClient (newPassword) {
//     this.password = newPassword
//   }
// }
// const tolya = new ClientType ({login: "tolya", email: "jjj@gmail.com", password:"hfneuf" })
// console.log(tolya);

// tolya.passwordClient = "h,dlpljfg"
// console.log(tolya.passwordClient)

// Напиши клас Notes який управляє колекцією нотаток у
//Властивості items.
//Нотатка це об'єкт із властивостями text priority
//Додай класу статичну властивість Priority,
//у якому зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priority = {
//     HIGHT: "hight",
//     LOW: "low",
//   }
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note)
//   }
//   removeNote(text) {
//     this.items = this.items.filter(el => el.text !== text)
//   }
//     updateText(text, newText) {
//       this.items = this.items.map((el) => {
//         if (el.text === text) {
//           el.text = newText
//         }
//       return el
//     })
//   }
// updateText(text, newText) {
//   const note = this.items.find(el => el.text === text)
//   console.log(note === this.items[0]);
//   note.text = newText
//   console.log(note);
// }
//   updateText(text, newText) {
//   const index = this.items.findIndex(el => el.text === text)
//   this.items[index].text = newText;
// }
// }

// const obj1 = new Notes()
// obj1.addNote({ text: 'Hello world', priority: Notes.Priority.HIGHT })
// obj1.addNote({ text: 'Hello Tolik', priority: Notes.Priority.HIGHT })
// obj1.addNote({ text: 'Hello Mango', priority: Notes.Priority.LOW })
// obj1.updateText('Hello world', 'Hello Poli')
// obj1.removeNote('Hello Poli')
// console.log(obj1);

// код приймає два рядки і повертає
// найдовший рядок перевернутий і доповнений
// з найкоротшим рядком на почтку і на кінці розвернутого рядка
// якщо рядки мають однакову довжину, перший
// вважається найдовшим

// 1 - создать функцию
// 2-

// function shorter_reverse_longer(a, b) {
//   // let short = '';
//   // let long = '';

//   // if (a.length >= b.length) {
//   //   long = a;
//   //   short = b;
//   // } else {
//   //   long = b;
//   //   short = a;
//   // }

//   // const result = short + long.split('').reverse().join('') + short;

//   // return result;

//   return a.length >= b.length ? b + a.split('').reverse().join('') + b : a + b.split('').reverse().join('') + a;
// }

// console.log(shorter_reverse_longer('first', 'abcde'));// 'abcdetsrifabcde';
// console.log(shorter_reverse_longer('hello', 'bau'));// 'bauollehbau';
// console.log(shorter_reverse_longer('fghi', 'abcde'));// 'fghiedcbafghi';

// Маючи список і число, створіть новий список, який міститиме кожен номер списку щонайбільше N разів без зміни порядку.
// Наприклад, якщо вхідне число дорівнює 2, а список вхідних даних — [1,2,3,1,2,1,2,3], ви берете [1,2,3,1,2], відкидаєте наступний [ 1,2], оскільки це призведе до того, що 1 і 2 будуть у результаті 3 рази, а потім візьме 3, що призведе до [1,2,3,1,2,3].
// Зі списком [20,37,20,21] і номером 1 результатом буде [20,37,21]
// deleteNth([20, 37, 20, 21], 1) // [20, 37, 21];

// function deleteNth(arr, n) {
//   const result = [];
//   const obj = {};
//   for (const number of arr) {
//     if (obj[number]) {
//       obj[number] = obj[number] + 1;
//     } else {
//       obj[number] = 1;
//     }
//     if (obj[number] <= n) {
//       result.push(number);
//     }
//   }
//   console.log(result);
// }

// function deleteNth(arr, n) {
//   const obj = {};
//   const result = arr.filter((el) => {
// obj[el] = (obj[el] || 0) + 1;
// return obj[el] <= n;
// console.log(obj);
// console.log((obj[el] = obj[el] + 1 || 1));
//   return (obj[el] = obj[el] + 1 || 1) <= n;
// });
// console.log(result);
// }

// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2];
// deleteNth([20, 21, 20, 37], 1);
// const user = {};
// const userName = "name";
// user[userName] = "Mango";
// console.log(user[userName]);

// const deleteNth = (array, N) => {
//   const result = [];
//   for (const num of array) {
//     if (result.filter((el) => el === num).length < N) {
//       result.push(num);
//     }
//   }

//   return result;
// };
// console.log(
//   deleteNth(
//     [
//       1,
//       1,
//       3,

//     ],
//     2
//   )
// );

// Дзідзьо та Сара думають, що вони закохані, але про те, де вони живуть, вони дізнаються про це лише тоді, коли зірвуть по квітці. Якщо на одній квітці парна кількість пелюсток, а на іншій непарна кількість пелюсток, це означає, що вони закохані.

// Напишіть функцію, яка братиме кількість пелюсток кожної квітки та повертатиме значення true, якщо вони закохані, і значення false, якщо ні.

// function lovefunc(flower1, flower2) {
//   // if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower2 % 2 === 0 && flower1 % 2 !== 0)) {
//   //   return 'YOU ARE BELOVED';
//   // }
//   // return 'SORRY, TRY AGAIN';
//   // return flower1 % 2 !== flower2 % 2;
//   return (flower1 + flower2) % 2 === 1;
// }
// console.log(lovefunc(1, 4));
// console.log(lovefunc(2, 2));
// console.log(lovefunc(0, 1));
// console.log(lovefunc(0, 0));

// lovefunc(1, 4); // true;
// lovefunc(2, 2); // false;
// lovefunc(0, 1); // true;
// lovefunc(0, 0); // false;

// Годинник показує h годин, m хвилин і s секунд після півночі.

// Ваше завдання — написати функцію, яка повертає час з опівночі в мілісекундах.
// past(0,1,1),61000
// past(1, 1, 1), 3661000

// const past = (h, m, s) => {
//   let result = 0;
//   let secToMili = s * 1000;
//   let minToMili = m * 60 * 1000;
//   let hoursToMili = h * 60 * 60 * 1000;
//   result = secToMili + minToMili + hoursToMili;
//   return result;
// };

// past(0,1,1),61000
// past(1, 1, 1), 3661000
// console.log(past(0, 1, 1));


// У цій ката йдеться про множення даного числа на вісім, якщо воно парне, і на дев’ять в іншому випадку.


// const simpleMultiplication = (mas) => mas.map(number => number % 2 === 0 ? number * 8 : number * 9);

// console.log(simpleMultiplication([2, 3, 7, 10]));








// EXTRA


// Teemo is not really excited about the new year's eve, but he has to celebrate it with his friends anyway.

// He has a really big passion about programming and he wants to be productive till midnight. He wants to know how many minutes he has left to work on his new project.
// He doesn't want to look on the clock all the time, so he thought about a function, which returns him the number of minutes.

// Can you write him a function, so he can stay productive?

// The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

// "x minute(s)"

// You will always get a date object with of today with a random timestamp.
// You have to round the number of minutes.
// Milliseconds doesn't matter!

// Some examples:

// 10.00 am => "840 minutes"

// 23.59 pm => "1 minute"

// const fullDay = new Date(new Date().setHours(0,0,0,0));

// // Test.assertEquals(minutesToMidnight(fullDay), "1440 minutes");

// console.log(fullDay);

// Створити маркований список.
//Створити кнопки "Add" "Remove", які змінюватимуть склад списку
//Створити input з якого будемо отримувати значення, яке буде в li
//* Парним li вказати червоний фон, непарним - синім
//Для виконання завдання використовуйте createElement

// const itemList = document.createElement(`ol`);
// const buttonAdd = document.createElement(`button`)
// const buttonRemove = document.createElement(`button`)
// const inputLi = document.createElement(`input`)
// buttonAdd.textContent = `Add`;
// buttonRemove.textContent = `Remove`;
// buttonRemove.disabled = true
// document.body.append(inputLi, buttonAdd, buttonRemove, itemList)

// buttonAdd.addEventListener(`click`, ()=>{const text = inputLi.value||`default`;
// const itemLi = document.createElement(`li`);
// itemLi.textContent = text;
// itemList.append(itemLi);
// buttonRemove.disabled = false;
// inputLi.value = ``
// console.log(itemList.children.length);
// const even = itemList.children.length%2 === 0
// itemLi.style.background = even ? `yellow` : `blue`
//   console.log(even);})

//   buttonRemove.addEventListener(`click`,()=>{
//     console.log(itemList.hasChildNodes());
//     itemList.lastElementChild.remove()
//     if(!itemList.hasChildNodes()) {
//       buttonRemove.disabled = true
//       return
//     }

//   })




//Створити невелику гру:)
// - Спочатку на екрані користувача відображатиметься
//яка - то форма (коло, квадрат, прямокутник)
// - При натисканні на неї в рандомному порядку форма повинна
//змінюватися на іншу
// - Форма щоразу повинна з'являтися у різних місцях на сторінці
// - Колір форми в рандомному порядку змінюється,
const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];

const formEl = document.createElement('div');
formEl.style.cssText = forms[2];
formEl.style.background = getRandomHexColor();
document.body.append(formEl);
formEl.addEventListener('click', () => {
  const index = randomither(forms.length)
  formEl.style.cssText = forms[index];
  formEl.style.background = getRandomHexColor();
  formEl.style.border = '5px solid black'
  formEl.style.position = 'absolute';
  const height = 100 - (formEl.clientHeight * 100) / document.documentElement.clientHeight;
  const width = 100 - (formEl.clientWidth * 100) / document.documentElement.clientWidth;
  formEl.style.top = randomither(height).toString() + '%';
  formEl.style.left = randomither(width).toString() + '%';
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomither = max => {
  return Math.floor(Math.random() * max);
};
