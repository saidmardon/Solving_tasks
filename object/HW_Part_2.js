// 1USD = 10.20

// Vasya 1000 // TJS 
// Ivan 150 // TJS
// Anton 230c // TJS
// Jony 1234 // USD
// Max 333 // USD
// John 780 // USD
// Umed 280 // TJS

//  Part 2
// 1. Создайте данные обекты
// 2. Создайте массив persons и в нём добавтье эти обекты
// 3. Просуммируйте все суммы массива persons и найдите результат в сомони;

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
  let result = 0;
  
  for (let i = 0; i < person.length; i++) {
      if (person[i].currency === "USD") {
          person[i].balance *= 10.20;
          person[i].currency = "TJS"
          result += person[i].balance;
          continue;
      }
      result += person[i].balance
  }
  
  console.log(result.toFixed(2));