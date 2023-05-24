'use strict';

//1. String concatenation.
console.log('my' + 'cat');
console.log('1' + 2);
console.log( `string literals :
'''''''''''''''''''''''''''''
1 + 2 = ${1+2}`
);
console.log('kangsoo\`s book');

// 2.Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainderj
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement} , counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement} , counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement} , counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement} , counter : ${counter}`);

// 4. Assignment operators

let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators

console.log(10 < 6);//less
console.log(10 <= 6);//less or equal
console.log(10 > 6);//greater
console.log(10 >= 6);//greater or equal


// 6. Logical operator: ||(or) , &&(and), !(not)
// Has higher priority than post-operand.
// When first operand is true, or operator post-operand is ignored.
//                       false, and operator`s post-operand is ignored.
const value1 = true;
const value2 = 4 < 2;

console.log(`or ${value1 || value2 || check()}`);
console.log(`and ${value1 && value2 && check() }`);
function check(){
    for(let i = 0 ; i < 10 ; ++i){
        console.log('aa');
    }
    return true;
}
console.log(value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// loose equality, with type conversion.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//strict equality without type conversion.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference

const kangsoo1 = {name: 'kangsoo'};
const kangsoo2 = {name: 'kangsoo'};
const kangsoo3 = kangsoo1;
console.log(kangsoo1 == kangsoo2);
console.log(kangsoo1 === kangsoo2);
console.log(kangsoo1 == kangsoo3);
console.log(kangsoo1 === kangsoo3);

console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null== undefined);
console.log(null=== undefined);

//8. Conditional operators :if
// if ,else if, else

const name = 'kangsoo';
if(name == 'kangsoo'){
    console.log('Welcom knagsoo!');
}
else if(name == 'coder'){
    console.log('You are amazing coder');
}
else{
    console.log('Unknown');
}

// 9.Tenary operator?
// condition ? value1 : value2
console.log(name == 'kangsoo' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if check
//use for enum-like value check
//use for multiple type che in TypeScript

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}//switch

// 11. Loops
//while , while the condition is truthly,
//boty code is excuted.

let i = 3;
while(i > 0){
    console.log(`while ${i}`);
    i--;
}
//do while loop, body code is executed first.
//then check  the condition.

do{
    console.log(`while ${i}`);
    i--;
}while(i > 0);

//for loop, for(begin ; condition ; step)
for(i = 3 ; i > 0 ; --i){
    console.log(`for ${i}`);
}
for(let i = 3 ; i > 0 ; --i){
    console.log(`inline variable for ${i}`);
}

//nested for loops
for(let i = 0 ; i < 2 ; ++i){
    for(let j = 0; j < 2; ++j){
        console.log(`nested for i : ${i} , j : ${j}`);
    }
}

for(let i = 0 ; i < 11 ; ++i){
    if((i % 2) === 1){
        continue;
    }
    console.log(`even number : ${i}`);
}
for(let i = 0 ; i < 11 ; ++i){
    if(i > 8){
        break;
    }
    console.log(`reaching to 8  : ${i}`);
}