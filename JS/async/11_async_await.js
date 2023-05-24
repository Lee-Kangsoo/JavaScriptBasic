'use strict';

//async & await
//clear style of using promise

// function fetchUser(){
//   // do network request 10 sec
//   return 'kangsoo';
// }

function fetchUserPending(){
  return new Promise((resolve , reject) => {

    //pending => neither fulfilled or rejected
    //never been called
    return 'kansgoo';
  });
}

function fetchUser(){
  return new Promise((resolve , reject) => {
    resolve('kangsoo');
  });
}
async function fetchUserAsync(){
  return 'kangsoo'
}

//Synchronous execution
const user = fetchUser();
console.log(user);
user.then(console.log);
console.log(user);

// 2. await

function delay(ms){
  return new Promise(resolve => setTimeout(resolve , ms));
}

async function getApple(){
  await delay(1000);
  return '🍎';
}
async function getBanana(){
  await delay(1000);
  return '🍌';
}
// async function pickFruits(){

//   const apple = await getApple();
//   const banana = await getBanana();
//   //wait total '2' seconds
//   return `${apple} + ${banana}`

// }

async function pickFruits(){
  // executor runs call get___();
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//3. useful Promise APIs

function pickAllFruits(){
  return Promise.all([getApple() , getBanana()]).then(fruits =>fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple() , getBanana()]);
}
pickOnlyOne().then(console.log)