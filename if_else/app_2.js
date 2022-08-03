const result1 = "hello" ?? "world";
console.log(result1);   // hello
 
const result2 = 0 ?? 5;
console.log(result2);   // 0
 
const result3 = "" ?? "javascript";
console.log(result3);   // "" - пустая строка
 
const result4 = false ?? true;
console.log(result4);   // false
 
const result5 = null ?? "not null";
console.log(result5);   // not null
 
const result6 = undefined ?? "defined";
console.log(result6);   // defined
 
let message = null;
const hello = "Hi JavaScript";
const result7 = message ?? hello;
console.log(result7);   // Hi JavaScript

