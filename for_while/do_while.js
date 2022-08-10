let a = 0;
for(let n = 0; n <=100; n++){
      if(n % 2 == 0){
            a = n + a;
      };
     
} console.log(a)

let b = 10;
for(let i = 1; i <= 50; i++){
      if(i==10)
      break;
      console.log(i)
}

let c = 30;
for(let j = 1; j <= 100; j++){
      if(j !== c)
      continue
      console.log(j)
}