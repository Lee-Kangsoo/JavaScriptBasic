//Function
// - fundamental building block in the program.
// - subprogram can be used multiple times.
// - performs a sask or calculates a value.

// 1. Function declaration
// function function_name(param1 , param2, ...){body ... return;}
// one function has only one-resposibility.
// naming doSomething , command ,verb
// e.g. createCardAndPoint -> createCard, createPoint
'use strict';

function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello@@');
log(1234);

// 2. Parameters
//primitive parameters : passed by value
//object parameters : passed by reference

function changeName(obj){
    obj.name = 'coder';
}
let kangsoo = { name: 'kangsoo'};
console.log(kangsoo);
changeName(kangsoo);
console.log(kangsoo);

// 3. Default parameters(added in ES6)
function showMessage(message , from = "Unknown"){
    console.log(`${message} by ${from}`);
}
showMessage("Hi !");

//4. Rest parameters(added in ES6)
function printAll(...args){
    //for(let i = 0 ; i < arguments.length ; ++i){
    //    console.log(args[i]);
    //}
    //for(const arg in args){
    //    console.log(arg);
    //}
    args.forEach((arg) => console.log(arg));
}
printAll( 'kangsoo has ' , 5 , 'apples');

// 5. Local scope
let globalMessage = 'global';

function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'child';
    }
    // ERROR because of local varialble scope is out of range.
    //console.log(childMessage);
}
printMessage();

// 6. Return a value
function sum(a , b){
    return a + b;
}
const result = sum(1,2);
console.log(result);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point <= 0 ){
        return;
    }
}

//First-class function
//function are treated like any other variable.
//can be assigned as a value to variable
//can be passed as an argument to other function
//can be returned by another function

//1.Function expression
//a function declaration can be called earlier than it is defined(hoisted)
//a function expression is created when the execution reaches it

afetrPrint(); //function declaration can be hoisted.
const print = function(){
    console.log('print');
}
function afetrPrint(){
    console.log('after print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,5));

// Callback function using function expression
function randomQuiz(answer , printYes , printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes right');
}
const printNo = function(){
    console.log('no Wraong');
}

randomQuiz('love me' , function(){console.log('yes')} , function(){console.log('not')});
randomQuiz('love you', printYes , printNo);

//Arrow function
//always anonymous
const simplePrint = function(){
    console.log('Simple print');
}

const arrowPrint = () => console.log('arrow function');
const addArrow = (a, b) => a + b ;
const simpleMultiply = function(a ,b){
    return a * b;
};
//IIFE immediately Invoked Function Expression.
(function hello(){
    console.log('IIFE');
})();

function calculate(command , a , b){
    switch(command){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('calculate function is not appropriated');
    }
}

console.log(calculate('add' , 22 , 1));
console.log(calculate('substract' , 3 , 1));
console.log(calculate('multiply' , 4 , 5));
console.log(calculate('divide' , 100 , 15));
console.log(calculate('remainder' , 100 , 15));