let text = "This is a hard work!!!";

let result = " ";

for(let i = 0; i < text.length; i++){
      if(text[i] === " "){
            result += "F"; // result = result + "F";
            continue;
      }       
      result += text[i] // result = result + text[i]
}  
console.log(result) // ThisFisFaFhardFwork!!!








 for(i = 0; i < text.length; i++){
      if(text[i] == "w"){
           console.log(i) //15 
      }
      
}

let counter = 0;

for(i = 0; i < text.length; i++){
       if(text[i] == "a"){
            counter++;
       }  
}
console.log(counter);    //2 for every "a" counter will be +1

for(i = 0; i < text.length; i++){
     if(text[i] == "a")
      console.log(text[i]) // a, a (all "a")
}

for(i = 0; i < text.length; i++){
      if(text[i] == "a")
       console.log(i) // 8, 11 ("a" index positions)
}

for(i = 0; i < text.length; i++){
      if(text[i] == "a")
       console.log("Found it") //Found it,  Found it (2 times)
} 


      





