'use strict';

//Objects
// one of the JavaScript`s data types
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of object
// object = {key : value};

// What if the number of characteristics increased??
// Too many data is spread and passed through function.
// const name = 'kansgoo';
// const age = 4;


//1. Literals and property
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object() //'object constructor' syntax
function print(person){
  console.log(person.name);
  console.log(person.age);
}

const kangsoo = {name :'kangsoo' , age : 4};
print(kangsoo);

kangsoo.hasJob = true;
console.log(kangsoo.hasJob);

delete kangsoo.hasJob;
console.log(kangsoo.hasJob);

//2.Computed property
// key should be always string
console.log(kangsoo.name);
console.log(kangsoo['name']);

kangsoo['hasJob'] = true;
console.log(kangsoo.hasJob);

function printValue(obj , key){
  console.log(obj[key]);
}
printValue(kangsoo , 'name');
printValue(kangsoo , 'age');

//3. Property value shorthand

const person1 = {name : 'bob' , age: 2};
const person2 = {name : 'steve' , age: 3};
const person3 = {name : 'dave' , age: 4};
const person4 = new Person('lobby' , 18);
console.log(person4);

//4. Constructor function
function Person(name , age){
  // omit create object and return this.
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator: property existence check key in obj
console.log('name' in kangsoo);
console.log('age' in kangsoo);
console.log('random' in kangsoo);
console.log(kangsoo.random);

//6. for..in vs for..of
for(let key in kangsoo){
  console.log(key);
}
// for(value of iterable)
const array = [1,2,3,4,5];
for(let i = 0; i < array.length ; ++i){
  console.log(array[i]);
}
for (let value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest , [obj1 , obj2 , obj3...])

const user = {name: 'kangsoo' , age : '30'};
const user2 = user;
user2.name ='coder';
console.log(user.name);

// old way
const user3 = {};
for(let key in user){
  user3[key] = user[key]
}
console.log(user , user3)
user3['name'] = 'kangsoo'
console.log(user , user3)

const user4 = Object.assign({} , user);
console.log(user4)

//another example

const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue' , size: 'big'};
//assign right hand priority
const mixed = Object.assign({} , fruit1 , fruit2);
console.log(mixed.color);
console.log(mixed.size);