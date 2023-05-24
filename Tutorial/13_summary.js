'use strict';

//Variable : number, string, boolean, null, undefined

let number = 2;
/* Copy value only for primitive type variable*/
let number2 = number;
console.log(number , number2);
number2 = 3;
console.log(number , number2);

//Object : Array, list, function except primitive{number, string, boolean, null, undefined}
//Object has only referenc address where the member variables ara stored.
const obj = {
  name: 'kangsoo',
  age : 4,
};
console.log();

//This is not allocate new memory
let obj_copy = obj;
console.log(`${obj.name} , ${obj_copy.name}`);
obj.name = 'james';
console.log(`${obj.name} , ${obj_copy.name}`);


const constNum = 2;
// Cannot be assinged to "const" variable
// constNum = 4;


//Function for common execution logic.
function add(a,b){
  return a + b;
}

//Function name has a referenc address.
// If doSomething declare with let,
// doSomthing would be changed function.
const doSomething = add;
console.log(`1 + 2 = ${add(1,2)}`);
console.log(`hello + world = ${add('hello' , 'world')}`);
console.log(`${add(2,5)} , ${doSomething(2,5)}`);

function custom_print(){
  console.log('print');
}
// There is no error.
custom_print(1,2,3,4,5);

function divide(a, b){
  return a / b;
}

function surprise(callback){
  const result = callback(1,3);
  console.log(result);
}
surprise(add);
surprise(divide);


//Operator
// false : 0 , -0 ,'' , null , undefined
// true  :-1 , 'hello' , object
let num = 2;  // equals to "let num = undefined;""

if(num){
  console.log('true');
}
else{
  console.log('false')
}
num && console.log(num)

let obj_undefined = {name : 'object exist'};
if(obj_undefined){
  console.log(obj_undefined);
}
obj_undefined && console.log(obj_undefined.name);


//Class
class Counter{
  constructor( runEveryFiveTimes){
    this.counter = 0;
    this.callback = runEveryFiveTimes
  }
  increase(){
    this.counter++;
    console.log(this.counter);
    if(this.counter %5 === 0){
      this.callback && this.callback(this.counter);
    }
  }
}
function alertNum(num){
  alert(`wow ${num}`);
}

function printSomething(count){
  console.log(`yo ${count}`);
}

const coolCounter = new Counter(printSomething);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);