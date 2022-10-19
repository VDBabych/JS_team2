//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа
function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("invalid")
        return
    }
    return Math.min(a, b);
    // return a < b ? a : b;
}

// console.log(typeof typeof true);

const result = min(2, 5);
console.log(result);
