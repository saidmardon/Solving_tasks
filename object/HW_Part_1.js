// 1USD = 10.20

// Vasya 1000 // TJS 
// Ivan 150 // TJS
// Anton 230c // TJS
// Jony 1234 // USD
// Max 333 // USD
// John 780 // USD
// Umed 280 // TJS

//  Part 1
// 1. Создайте данные обекты
// 2. Создайте массив persons и в нём добавтье эти обекты
// 3. Создайте новый массив  richMens и добавтье людей у которых сумма больше 500
// 4. Просуммируйте все суммы массива RichMens;

let Vasya = {
    name: 'Vasya',
    balance: 1000,
    currency: 'TJS'
}

let Ivan = {
    name: 'Ivan',
    balance: 150,
    currency: 'TJS'
}

let Anton = {
    name: 'Anton',
    balance: 230,
    currency: 'TJS'
}

let Jony = {
    name: 'Jony',
    balance: 1234,
    currency: 'USD'
}

let Max = {
    name: 'Max',
    balance: 333,
    currency: 'USD'
}

let John = {
    name: 'John',
    balance: 780,
    currency: 'USD'
}

let Umed = {
    name: 'Umed',
    balance: 280,
    currency: 'TJS'
}

let person = [Vasya, Ivan, Anton, Jony, Max, John, Umed];

let richMens = [];

for (let i = 0; i < person.length; i++) {
    if (person[i].balance > 500) {
        richMens.push(person[i]);
    }
}

let result = 0;

for (let j = 0; j < richMens.length; j++) {
    result += richMens[j].balance;
}

console.log(result)


