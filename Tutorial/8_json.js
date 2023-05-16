'use strict';

//JSON
//JaveScript Object Noration

// 1.Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple' , 'banana']);
console.log(json , typeof json);

const rabbit = {
  name : 'tori',
  color : 'white',
  size : null,
  birthData: new Date(),
  jump : ()=> {
    console.log(`${rabbit.name} can jump`);
  }
};

json = JSON.stringify(rabbit , ['name' , 'color' , 'size']);
console.log(json);

json = JSON.stringify(rabbit , (key, value) =>{
  return key === 'name' ? "kangsoo" : value;
});
console.log(json);

json = JSON.stringify(rabbit);

// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json , (key , value) =>{
  console.log(key , value)
  return key === 'birthData' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(obj.birthData.getDate());
console.log(rabbit.birthData.getDate());