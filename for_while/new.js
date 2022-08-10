// "а" 7;
// "о" 10;
// "н" 20;
// Найдите количество символов и умножте кол-во на значение символа и
// в конце при плюсуйте все три значения

let text = "Я изучаю программирование!"
let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
for(i = 0; i < text.length; i++){
      if(text[i] === "а"){
           cnt1 = cnt1 + 1 * 7;
      } else if(text[i] === "о"){
            cnt2 = cnt2 + 1 * 10;
      } else if(text[i] === "н"){
            cnt3 = cnt3 + 1 * 20;
      }  

}
console.log(cnt1  +  cnt2 +  cnt3 ); // 61  

let multiply = 0;
for(let j = 0; j < text.length; j++){
      if(text[j] === "а"){
            multiply += 7;
      }
      if(text[j] === "о"){
            multiply += 10;
      }
      if(text[j] === "н"){
            multiply += 20;
      }
}
console.log(multiply)