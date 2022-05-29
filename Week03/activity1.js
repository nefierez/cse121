// Declare an array with value = ['one', 'two', 'three']
// Convert our array of strings into an array of HTML strings. Each string should be turned into a list item. For example: "<li>one</li>"
// Set our list of HTML strings into the myList list. (Hint...checkout the .join() method.)

const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


// Declare an array with letter grades in it: ['A', 'B', 'A']
// Write a function that will take one letter grade, and return the appropriate gpa points for that grade. IE if we send in 'A' it should return 4.
// Use map and our conversion function to convert the array in step 1 to gpa points.

const grades = ["A", "B", "A"];
function convertgradretopoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B")   {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertgradretopoints);


// Using the function from the previous activity, convert an array of grades into an array of gpaPoints.
// Using reduce calculate the GPA from the array of gpaPoints.

// Option#1
const gpaPoints = grades.map(convertgradretopoints);
const PointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = PointsTotal / gpaPoints.length;

// Option#2
const PointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = PointsTotal / gpaPoints.length;

// Option#3
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


// Declare an array with the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
// Using filter keep only the fruits that are longer than 6 characters.
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruits = fruits.filter(function (fruit) {
    return fruits.lenght < 6;
});

//same thing with an arrow function
const shortFruits = fruits.filter((fruit) => fruits.length < 6);


// Declare an array with the following value: [12, 34, 21, 54]
// Declare a luckNumber variable with the value 21;
// Use indexOf to see if the luckyNumber is in the Array.

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let luckyIndex = numbers.indexOf(luckNumber);