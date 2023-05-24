'use strict';

class UserStorage{
  loginUser(id , passward){
    return new Promise( (resolve , reject) =>{
      setTimeout(() => {
        if(
          (id === 'kangsoo' && passward === 'strong') ||
          (id === 'coder' && passward === 'academy')
        ){
          resolve(id);
        }
        else {
          reject(new Error('not found'));
        }
      } , 2000);
    });
  }
  getRoles(user){
    return new Promise((resolve , reject) => {
      setTimeout( () =>{
        if (user === 'kangsoo'){
          resolve({name :'kangsoo',role : 'admin'});
        }
        else{
          reject(new Error('no access'));
        }
      } ,1000)
    });
  };
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passward = prompt('enter yout password');
userStorage.loginUser(id ,passward)
  .then(user => userStorage.getRoles(user))
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log)
// userStorage.loginUser(
//   id, 
//   passward,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//       },
//       (error) => { 
//         console.log(error) ;
//       });
//     },
//   (error) => { 
//     console.log(error) 
//   }
// );

// const getUser = (id , passward) => new Promise((resolve , reject) =>
// {
//   setTimeout(() => {
//     if (
//       (id === 'kangsoo' && passward === 'strong') ||
//       (id === 'coder' && passward === 'academy')
//     ) {
//       resolve(id);
//     }
//     else {
//       console.log(`id : ${id} , passward : ${passward}`);
//       reject(new Error('not found'));
//     }
//   }, 1000);
// });
// const getRoles = (user) => new Promise((resolve , reject) => {
//   setTimeout(() => {
//     if (user === 'kangsoo') {
//       resolve({ name: 'kangsoo', role: 'admin' });
//     }
//     else {
//       reject(new Error('no access'));
//     }
//   }, 1000);

// });

// getUser(id , passward)
//   .then(user => getRoles(user))
//   .catch(console.log)
//   .then(console.log)
