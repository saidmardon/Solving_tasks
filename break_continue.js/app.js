for (let i = 0; i < 10; i++) {
  if (i === 3) { 
      continue; 
}
  console.log(i) // 3 is deleted
}
for (let i = 0; i < 10; i++) {
      if (i === 3) { 
          break; 
    }
      console.log(i) // 0, 1, 2 дальше не читает
    }
    