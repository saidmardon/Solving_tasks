// 1. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let arr = ["a", "b", "c"];
let arr1 = [1, 2, 3];
let Result = arr.concat(arr1);
console.log(Result);//[ 'a', 'b', 'c', 1, 2, 3 ]

// 2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr_1 = ["a", "b", "c"];
arr_1.push(1, 2, 3);
console.log(arr_1); //[ 'a', 'b', 'c', 1, 2, 3 ]

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr_2 = [1, 2, 3];
arr_2.push(4, 5, 6);
console.log(arr_2); //[ 1, 2, 3, 4, 5, 6 ]

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr_3 = [1, 2, 3];
arr_3.unshift(4, 5, 6);
console.log(arr_3); //[ 4, 5, 6, 1, 2, 3 ]

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr_4 = ["js", "css", "jq"];
document.write(arr_4[0]);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let arr_5 = ["js", "css", "jq"];
document.write(arr_5[2]); 

// 7.Дан массив [3, 4, 5]. Удалите последний элемент массива
let arr_6 = [3, 4, 5];
arr_6.pop();
console.log(arr_6); //[ 3, 4 ]

// 8.Дан массив [1, 2, 3]. Удалите первый элемент массива
let arr_7 = [1, 2, 3];
arr_7.shift();
console.log(arr_7); //[ 2, 3 ]

// 9.Создайте массив и добавьте чётные числа из 1 до 100 в этот массив 
let arr_8 = [];
for(let i = 0; i < 100; i++){
      arr_8.push(i)
}
console.log(arr_8)

// 10.Разделите массивы по типу данный массив [1, ‘hello’, true, 2, ‘4’, false]
let array = [1, "hello", true, 2, "4", false]

let numbers = [];
let strings = [];
let booleans = [];

for(let j = 0; j < array.length; j++){
      if(typeof array[j] === "number"){
            numbers.push(array[j])
      }
      if(typeof array[j] === "string"){
            strings.push(array[j])
      }
      if(typeof array[j] === "boolean"){
            booleans.push(array[j])
      }
}
console.log(numbers, strings, booleans) //[ 1, 2 ] [ 'hello', '4' ] [ true, false ]
