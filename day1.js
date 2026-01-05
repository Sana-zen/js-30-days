console.log("Day 1: JS Logic Gym");

// Variables and Scope 

let name = "Sana Khan";
let age = 18;

if (name !== "") {
    console.log(`Hello! Myself ${name}!`);
} 

console.log(`I'm ${age} years old.`);

// Functions

// Function for addition of two numbers 
function add (a, b) {
  return a + b;
}

console.log(add(5, 10));

// Function for checking Even and Odd 
function evenOrOdd (num) {
  return num % 2 === 0 ? "Even" : "Odd";
} 

console.log(evenOrOdd(4));

// Function for handling empty array

function isEmpty (arr) {
    return arr.length === 0 ? "Empty" : "Not Empty";
}

let fruits = ["apple", "strawberry", "mango", "lyche", "banana"];
console.log(isEmpty(fruits));

// Function for calculating Factorial.
function calculateFactorial(num) {
    let fact = 1;
    if (num === 0 || num === 1) {
        return 1;
    } else {
        for(let i = 2; i <= num; i++) {
            fact *= i;
        }
    }
    return fact;
}
let num = 5;
const factorial = calculateFactorial(num); 
console.log(`Factorial of ${num} is : ${factorial}`);

// Conditional Logic

let score = 65;

switch (true) {
    case (score >= 90):
        console.log("A");
        break;
    case (score >= 75):
        console.log("B");
        break;
    case (score >= 50):
        console.log("C");
        break;
    default:
        console.log("Fail");
}

// Arrays and Objects 

const student = {
    name: "Sana khan",
    age: 18,
    marks: [78, 85, 90, 66],
    phone: {
        home: "123-456-7890",
        work: "1987-654-321"
    }
}

function calculateAverage (arr) {
    let average;
    let totalMarks = 0;
    if (arr.length === 0) {
        return 0;
    } else {
    for (let i = 0; i < arr.length; i++) {
         totalMarks += arr[i];
    }
    average = totalMarks / arr.length;
    return average;
}
}

console.log(student.phone.home);
console.log(calculateAverage(student.marks));

// Loops
// Printing numbers using loops
 let number = 10;
 for(let i = 1; i <= number; i++) {
   console.log(i);
 }

//  Printing only even numbers from an array
let arrayNumbers = [1, 2, 4, 6, 54, 353, 563, 255, 886];
let evenArray = [];
let oddArray = [];
for(let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0) {
        evenArray.push(arrayNumbers[i]);
    } else {
        oddArray.push(arrayNumbers[i]);
    }
}

console.log(evenArray);
console.log(oddArray);

// Reversing an Array Manually

const ogArray = [2, 4, 6, 8, 10];
let reversedArray = [];
for (let i = ogArray.length - 1; i >= 0; i--) {
   reversedArray.push(ogArray[i]);
}

console.log(reversedArray);

