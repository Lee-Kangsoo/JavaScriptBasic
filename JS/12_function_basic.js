'use strict';

// 1. Function declaration vs call.
// Function declaration
function doSomething() {
  console.log('hello function basic');
}
//Function call
doSomething();

// 2.function that returns a value or values.
function add(a ,b ){
  const sum=a+b;
  return sum;
}
const sum = add(1,2);

// 3. Method for learning JS language.
console.log(sum);

// 4. Function pass through the function parameter.

function doSomethingFunction(add){
  console.log(add);
  const result = add(5,8);
  console.log(result)

}
// Function passed paramter not called. add vs add()
doSomethingFunction(add);

// Function could be allocated to variable.
const addFun = add;
console.log(addFun);
console.log(addFun(3,4));