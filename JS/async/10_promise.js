'use strict';

// Promise is a Javascript object for asynchronous operation.
// - state :pending -> fulfilled or rejected (operation whether success or fail)
// - Producer and comsumer

// 1.Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve , reject) => {
  // Doing some heavy work (network , read file)
  // Executer is immediately executed.
  console.log('doing something');
  setTimeout(() => {
    resolve('kangsoo');
    // reject(new Error('no network'));
  } , 2000);
});

// 2. Comsumers: then, catch, finally
promise
.then(value=> {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally')
});

// 3. Promise Chaining
const fetchNumber = new Promise( (resolve , reject) =>{
  setTimeout( ()=>resolve(1) , 1000);
});
fetchNumber
  .then(num => num *2)
  .then(num => num *3)
  .then(num => {
    return new Promise((resolve , reject) => {
      setTimeout(() => resolve(num - 1) , 2000);
    });
  })
  .then(num => console.log(num))


//4. Error handling
const getHen = () => new Promise( (resolve , reject) => {
  setTimeout(()=> resolve('🐔') , 1000 );
});
const getEgg = hen => new Promise((resolve , reject) => {
  // setTimeout( () => resolve(`${hen} -> 🥚`) , 1000);
  setTimeout(()=> reject(new Error(`error! ${hen} -> 🥚`)))
})
const cook = egg => new Promise((resolve , reject) => {
  setTimeout( ()=> resolve (`${egg} -> 🍳`),1000);
})
// getHen() //
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal));

getHen() //
  .then(getEgg)
  .catch(error => {
    return '🍞';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log)
