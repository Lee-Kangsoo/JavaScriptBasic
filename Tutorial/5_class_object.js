'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance


class Person {
  //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} : hello!!`);
    }
}

const kangsoo = new Person('kangsoo', 33);
console.log(kangsoo.name);
console.log(kangsoo.age);
kangsoo.speak();

// 2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value <0 ){ 
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.firstName)
console.log(user1.lastName)
console.log(user1.age)
console.log(user1._age)


//3. Fields(public, private)
// Too soon!
// Add "#" at begin of variable.

class Experiment {
  publicField = 2;
  // #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
// console.log(experiment.privateField);

//4. Static properties and methods
// Too soon!

class Article {

  static publisher = 'Dream coding';

  constructor(articleName){
    this.articleName = articleName;
  }
  static printPublisher(){
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
article1.printPublisher();

//5. Inheritance & polymorphism
class Shape{
  constructor(width , height , color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(){
    console.log(`drawing ${this.color} color!`);
  }
  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  toString(){
    return `Triangle : color ${this.color}`;
  }
  draw(){
    super.draw();
    console.log('◬');
  }
  getArea(){
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
const triangle = new Triangle(20,20 ,'red');
triangle.draw();
console.log(`rectangle area ${rectangle.getArea()}`);
console.log(`triangle area ${triangle.getArea()}`);

//6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());