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

function caculculateAverage() {
    console.log(arguments);
    let avarege = 0;
    let count =0;
    
    for (let argument of arguments) {
        if (typeof argument !== "number") {
            continue
        }
        avarege += argument
        count += 1
    }
    console.log((avarege/count).toFixed(1));
}
caculculateAverage(2, 5, 7, 'f', 't')