// Сумма чисел от 1 до N
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumTo(5));

// Степень числа
function pow(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}
console.log(pow(2,3));

// Подсчёт чётных чисел от 1 до n
function countEven(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEven(10));

// Факториал числа
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5));

// Повтор строки
function repeatText(text, count) {
    let result = "";
    let i = 0;
    while (i < count) {
        result += text;
        i++
    }
    return result;
}
console.log(repeatText("Hi", 3))

// Числа в диапазоне
function printRange(start, end) {
    let result = "";
    let i = start;
    while (i <= end) {
        result += i;
        if (i < end) {
            result += " ";
        }
        i++;
    }
    return result;
}
console.log(printRange(3, 7));
// Подсчёт цифр