'use strict';

//Q1. make a string out of an array
{
  const fruits = ['apple' , 'banana' , 'orange'];
  console.log(fruits.join(' '));
}

//Q2. make an array out of a string.
{
  const fruits = '🍎 , 🥝 , 🍌 , 🍒';
  const output = fruits.split(',');
  console.log(output , output.length);
}

//Q3. make this array look like this : [5,4,3,2,1]
{
  const array = [1,2,3,4,5];
  console.log(array.reverse());
}

//Q4.  make new array without th first two elements.
{
  const array = [1,2,3,4,5];
  const result = array.slice(2,array.length);
  console.log(result);
  array.splice(0,2);
  console.log(array);
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

//Q5 . find ad student with the score 90.
{
  const result = students.find(function (student , index) {
    return student.score == 90;
  });
  const result2 = students.find( (student) => student.score===90)
  console.log(result);
  console.log(result2);
}

//Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
//Q7. make an array containing only the students` socres 
// results should be: [45,80,90,66,88]
{
  const result = students.map(student => student.score);
  console.log(result);
}

//Q8. check if there is a student with the score lower than 50
{
  const result = students.some(student => student.score < 50);
  const every_result = students.every(student => student.score >= 50);

  console.log(result);
  console.log(every_result);
}
//Q9. compute students average score
{
  const result = students.reduce( (prev , curr , index) => prev + curr.score/students.length  , 0);
  console.log(result)
}

//Q10. make a string containing all the scores
// result should be: [45,80,90,66,88]
{
  const result = students.map(value => value.score).join(",")
  console.log(result)
}

//Bonus! do Q10 soretd in ascending order
// result should be: '45 ,66,680,88,90'
{
  const result = students.sort( (a , b) => a.score > b.score).map(value => value.score).join(',')
  const result2 = students.map(value => value.score).sort((a,b) => a > b).join(',')
  console.log(result)
  console.log(result2)
}