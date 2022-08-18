let user = {
      name: "Said",
      age: 35,
      "Said Mardon": true, //Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки
};
user.isAdmin = true; //Значение может быть любого типа
console.log(user.age) //35
console.log(user.isAdmin) //true
delete user.name;
console.log(user) //{ age: 35, 'Said Mardon': true, isAdmin: true }

const person = { //Объект, объявленный через const, может быть изменён.
      name: "Mardon"
};
person.name = "Said"
console.log(person.name)//Said

let human = {};
human["The likes apple"] = true;
console.log(human["The likes apple"])//true
delete user["The likes apple"];
console.log(user["The likes apple"]);//undefined

function makeUser(name, age) {
      return {
        name: name,
        age: age
        // ...другие свойства
      };
    }
    
let users = makeUser("John", 30);
console.log(users.name); // John
