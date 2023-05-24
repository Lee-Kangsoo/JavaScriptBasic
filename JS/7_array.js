'use strict';
//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

console.log(arr1);
console.log(arr2);

//2. Index position.
const fruits = ['Apple' , 'Banana' ,'kiwi'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[fruits.length -1]);

//3. Looping over an array
//Print all fruits
//a. for
for(let i = 0 ; i < fruits.length; ++i){
  console.log(fruits[i]);
}
//b. for of
for(let value of fruits){
  console.log(value);
}
//c. forEach
console.log('-------------------------');
fruits.forEach(function(fruit ){
  console.log(fruit);
});

fruits.forEach(fruit => console.log(fruit));
console.log('-------------------------');

//4. Addition, deletion ,copy
fruits.push('strawberry' , 'pale');
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('strawberry' , 'lemon');
console.log(fruits);

//shift: remove an item 
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than push, pop
// slice: remove an item by index position

fruits.push('strawberry' , 'peach' , 'lemon');
console.log(fruits);

fruits.splice(1 ,1);
console.log(fruits);
fruits.splice(1 ,1 , 'peanut' , 'watermelon');
console.log(fruits);

//combine two arrays

const fruits2 = ['pear' , 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.log(fruits);
console.log(fruits.indexOf('Apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('orange'));

//includes
console.log(fruits.includes('Apple'));
console.log(fruits.includes('orange'));

//last index of
fruits.push('Apple')
console.log(fruits);
console.log(fruits.indexOf('Apple'))
console.log(fruits.lastIndexOf("Apple"))