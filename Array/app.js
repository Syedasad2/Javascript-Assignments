// ARRAY
var cities = ['karachi','heyderabad','sukkur','lahore']
console.log('cities-->',cities);

//Add elements.
cities.push('gawadar', 'abbotabad', 'rawalpindi')
console.log('Push method-->', cities)

//remove method 
cities.pop()
console.log('pop method-->',cities);

//Using Shift method.
cities.shift()
console.log('Shift method-->',cities);

//using unshift method.
cities.unshift('Badin','multan')
console.log('Unshift method-->',cities);


//Array 2
var cars = ['honda','corrola','macclaren','rollsroyace','landcruiser']
console.log(cars);
var lenght = cars.length
console.log('cars lenght-->',lenght);
console.log('first latter of cars-->',cars[0]);
console.log('second latter of cars-->',cars[1]);

//Book Questions
// Declare and initialize a string array
var students = ['Ali','Asad','abid','hunain','kashif']
console.log('student names-->',students);

// Declare and initialize a numbers array
var num = [10, 20, 30, 40, 50];
console.log(num);

// Declare and initialize a boolean array
var boolean = [true, false];
console.log(boolean);

// Declare and initialize a mixed array
var mixed = ["apple", 25, true,null];
console.log(mixed);

// Array to store student names
var studentNames = ["Ali", "abid", "Asad"];
var studentScores = [420, 380, 450]; 

// Function to calculate percentage
function Percentage(score) {
    return (score / 500) * 100;
}

console.log("Student Scores & Percentages:");
for (let i = 0; i < studentNames.length; i++) {
    let name = studentNames[i];
    let score = studentScores[i];
    let percentage = Percentage(score).toFixed(2); 
    console.log(`${name}: Score = ${score}, Percentage = ${percentage}%`);
}
//Add anywhere you want
var colors = ['red','blue','green']
var value = prompt ('enter colour:')
var index = +prompt ('enter index number:')
colors.splice(index,0,value)
console.log(colors);
  //add in the last 
var colors = ['red','blue','green']
var value = prompt ('enter last colour:')
colors.push(value)
console.log(colors);