// Создайте три массива и добавтте в эти массивы значение
// numbers = [1, 3, 4];
// strinhs = ["Текст", "Другой текст"];
// boolean = [false];
let arr = [1, 3, 4, "Текст", "Другой текст", false]

let numbers = [];
let strings = [];
let booleans = [];

for(i = 0; i < arr.length; i++){
      if(typeof arr[i] === "string"){
            strings.push(arr[i])
      }
      if(typeof arr[i] === "number"){
            numbers.push(arr[i])   
      }
      if(typeof arr[i] === "boolean"){
            booleans.push(arr[i])
      }
}
console.log("number", numbers, "string", strings, "boolean", booleans)
// number [ 1, 3, 4 ] string [ 'Текст', 'Другой текст' ] boolean [ false ]
      
























/* let arr = ["Said", "Mumin", "Said", "Kabud", "Said"];
let counter = 0;
for(i = 0; i < arr.length;i++){
      if(arr[i] === "Said")
      counter++;
}
console.log(counter) //3  */