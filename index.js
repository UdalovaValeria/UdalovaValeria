// Задание 1.Напиши программу, которая спрашивает возраст пользователя через prompt() и выводит: "Доступ запрещён!" если возраст < 18, иначе "Доступ разрешён!".

let age = Number(prompt("Пожалуйста, введите ваш возраст:"));

if (age < 18) {
    console.log("Доступ запрещён!");
} else {
    console.log("Доступ разрешён!");
}

// Задание 2. Тернарный оператор 

let age2 = Numder (prompt("Введите свой возрат."));
const result = (age2 < 18) ? "Доступ запрещен!" : "Доступ разрешен!";
    console.log(result);

    // Задание 3. swtch
    const dayNumber = Number(prompt("Введите номер дня недели (от 1 до 7)"));
    switch (dayNumber) {
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Среда");
            break;
        case 4:
            console.log("Четверг");
            break;
        case 5:
            console.log("Пятница");
            break;  
        case 6:
            console.log("Суббота");
            break;
        case 7:
            console.log("Воскресенье");
            break; 
        default:
            console.log("Ошибка: такого дня нет!");             
        
}
