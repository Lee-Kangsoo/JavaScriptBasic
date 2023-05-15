'use strict';

//Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let fruits_str = "";
  for (let fruit of fruits) {
    fruits_str += " " + fruit;
  }
  console.log(fruits_str);
}

//Q2. make a string out of an array
{
  console.log('Q1 . make a string out of array')
  const fruits = ['🍎', '🥝,', '🍌,', '🍒']
  let str =''
  for(let value of fruits){
    str += value;
  }
  console.log(fruits);
  console.log(str);
}

//Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => a < b);
  console.log(array);
}

//Q4. make new array without the first two elements.
{
  const array = [1,2,3,4,5];
  let new_array = array.splice(2)
  console.log(new_array)
}

class Student{
  constructor(name , age , enrolled , score){
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A' , 29 ,true , 45),
  new Student('B' , 28 ,false , 80),
  new Student('C' , 30 ,true , 90),
  new Student('D' , 40 ,false , 66),
  new Student('E' , 18 ,true , 88),
];
//Q5. find ad student with the score 90.
{
  const outs = [];
  for(let student of students){
    if (student.score === 90){
      outs.push(student);
    }
  }
  console.log(outs);
}

//Q6. make an array of enrolled students.
{
  const outs =[];
  for(let student of students){
    if(student.enrolled){
      outs.push(student);
    }
  }
  console.log(outs);
}

//Q7. make an array containing only the students` scores
// result should be:[45,80,90,66]
{
  const outs =[];
  for(let student of students){
    outs.push(student.score);
  }
}

//Q.8 check if there is a student with the score lower than 50
{
  const outs = [];
  students.forEach(function(value){
    if (value.score < 50){
      outs.push(value);
    }
  })
  console.log(outs);
}

//Q.9 compute student`s average store
{
  let total_score = 0;
  students.forEach(value => total_score += value.score);
  console.log(total_score / students.length);
}

//Q.10 make a string containing all the score
// result should be: '45, 80, 90, 66, 88'
{
  const outs = [];
  students.forEach(value => outs.push(value.score));
  console.log(outs.join(', '));
}

//Bonus! do Q10 sorted in ascending order
// result should be: '45 ,66, 80, 88, 90'
{
  const outs = [];
  students.forEach(value => outs.push(value.score));
  outs.sort((lhs , rhs) => lhs > rhs)
  console.log(outs.join(', '));
}