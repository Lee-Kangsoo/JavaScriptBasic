'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//Hoisting: var ,function declaration automatically move to top-level at js file.


//Synchronous
console.log('1');
console.log('2');

//Asynchronous
setTimeout( () => console.log('3') ,1000);
console.log('4');


//Synchronous callback.
function printImmediately(print){
  print();
}
printImmediately(() => console.log('hello'));

function printWithDelay(print , timeout){
  setTimeout(print , timeout);
}
printWithDelay( ()=> console.log('asynchronous') , 2000);
///Asynchronous callback.


//welcome to callback hell.
//Chain of callback is too hard to understand.

class UserStorage{
  loginUser(id , passward , onSuccess , onError){
    setTimeout(() => {
      if(
        (id === 'kangsoo' && passward === 'strong') ||
        (id === 'coder' && passward === 'academy')
      ){
        onSuccess(id);
      }
      else {
        onError(new Error('not found'));
      }
    } , 2000);
  }
  getRoles(user, onSuccess , onError){
    setTimeout( () =>{
      if (user === 'kangsoo'){
        onSuccess({name :'kangsoo',role : 'admin'});
      }
      else{
        onError(new Error('no access'));
      }
    } ,1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passward = prompt('enter yout password');

userStorage.loginUser(
  id, 
  passward,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => { 
        console.log(error) ;
      });
    },
  (error) => { 
    console.log(error) 
  }
);





