/* function sayHello(){
      console.log("Hello world")
}
sayHello() //Создайте функцию который выводить 'Hello world!' */

(function () {   //Самовызывающиеся функции
      console.log("Learning HTML & CSS, Js and React")
}()); //Создайте самовызыващию функцию который выводить 'Я учу HTML CSS JS REACT'

function sum(a, b){
      console.log(a, b)
}
sum(1, 2)
//Создайте функцию у которого есть 2 аргумента 'a' и 'b' и выводите эти значение на консоль

function plus(a, b){
      console.log(a+b)
}
plus(1, 2) //Создайте функцию plus который плюсует два значения 'a' и 'b';

function evens(numbers){
      if(numbers % 2 === 0){
            console.log(1)
      }else{
            console.log(2)
      }
}
evens(22)
// Создайте функцию который определяеть четные или нечетныйе числа если четные выводить 1 иначе 2.

let arrNumbers = [2, 4, 1, 6, 3, 7, 0]
function maxNumber(arr){
      let max = arr[0];
      for(let i = 0; i < arr.length; i++){
            if(arr[i] > max){
                  max = arr[i];
            }
      }
      return max;
}
console.log(maxNumber(arrNumbers))
//Создайте функцию который находит максимальное число массива; 

let test = "12345"
function reverse(str){
      let reverseStr = "";
      for(let i = str.length - 1; i >= 0; i--){
            reverseStr += str[i]; 
      }
      return reverseStr;
}
console.log(reverse(test))//54321
//Создайте функцию который переворачивает значение стринга 
//Например: значение  = ‘12345’; после функции значение = ’54321’

