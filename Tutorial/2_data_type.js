// 1. Use strict
// added in ES5
// use this for Valina JavaScript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = "global name"
{
    let name = 'kangsoo';
    console.log(name);
    name = 'hello'
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);


// var (don`t ever use this)
// var hoisting(move declaration from botton to top)
{
    age = 4;
    var age;
}
//var ignore block scope
console.log(age);

{
    block_age = "block age";
    var block_age;
}
console.log(block_age)

// 3. Constants r(read only)
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistake
//
// Mutable(let) < - > Immutable(const)
const daysInWeek = 7;
const maxNumber = 5;

//Note !
//Immutable data types : primitive types , frozen objects(i.i.object.freeze())
//Mutable data types : allo objects by default mutable in JS

// 4. Variable types.
// primitive , single item : number , string, boolean, null, undefined , symbol.
// object, box container
// function, first class function.

const count = 17;
const size = 17.1;
console.log(`value : ${count} , type : ${typeof count}`)
console.log(`value : ${size} , type : ${typeof size}`)

const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(`Infinity : ${infinity}`);
console.log(`negativeInfinity : ${negativeInfinity}`);
console.log(`Not a number : ${nAn}`);

// BigInit(fairly new, don`t use it yet)
// Add "n" at the end of number.
const bigInt = 12345678901234567789012345678901234567890n;
console.log(`value ${bigInt} , type : ${typeof bigInt}`)

//string
const char  = 'c';
const brendan  = "Brendan"
const greeting = 'hello' + brendan;
console.log(`value : ${greeting} , type : ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literal string.
console.log(`value : ${helloBob} , type : ${typeof helloBob}`);

// Boolean type.
// false : 0 , null , undefined NaN, ''
// true : any value.

const canRead = true;
const test  = 3 < 1;
console.log(`value : ${canRead} type : ${typeof canRead}`);
console.log(`value ${test} , type ${typeof test}`);

//null
let nothing = null;
console.log(`value ${nothing} type ${typeof nothing}`);

//Undefined
let x;
console.log(`value ${x} type ${typeof x}`);

//Symbol create unique identifier for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(` Are symbol1 and symbol2 same? ` + (symbol1 == symbol2));

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(` Are gSymbol1 and gSymbol2 same` + (gSymbol1 == gSymbol2));
console.log(`value : ${gSymbol1.description} type : ${typeof gSymbol1}`)

//object , real-life object , data-structure.
const KangsooLee = { name : 'kangsoo lee' , age : 32};
console.log(KangsooLee);

// Const ref cannot be assigned after initialization
// But could be assigned member.
// KangsooLee = {name : 'changeKangsooLee' ,age : 99 }
KangsooLee.name = 'ChangeKangsooLee';
KangsooLee.age = 99;
console.log(KangsooLee);

//5. Dynamic typing: dynamically typed language
let text = 'hello'
console.log(`value : ${text} , type ${typeof text}`);
text = '1'
console.log(`value : ${text} , type ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text} , type ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text} , type ${typeof text}`);