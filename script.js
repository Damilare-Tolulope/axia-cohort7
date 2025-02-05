console.log("This is for the external javascript file");

// Array and Objects
// const person = {
//     firstname: 'Sunshine',
//     lastname: 'Enyim',
//     phoneNumber: "08012345658",
//     age: 25,
//     hobbies: ['Playing CODM', 'Watching Animes', "Sleeping"],
//     address: {
//         street: "1 Sunday Sampsin Street",
//         city: "Ilorin",
//         state: "Kwara",
//         country: "Nigeria",
//         zip: 123123
//     }
// }

// console.log(person.hobbies.join(" and "))
// console.log(person.firstname, person.lastname, person.phoneNumber, person.age)
// console.log(`My favorite hobby is ${person.hobbies[0]}`);
// console.log(`I live in ${person.address.street}, ${person.address.city}, ${person.address.state}`)


// const colors = [
//     "red", 
//     "black", 
//     "white", 
//     "brown", 
//     "yellow", 
//     "pink", 
//     { favColor: "navy-blue", secColor: "ash" },
//     ["offWhite", "gray"]
// ];

// console.log(colors[6].favColor)
// console.log(colors[7][0])

// colors.push("green");
// console.log(colors)

// colors.pop();
// console.log(colors);

// colors.shift();
// console.log(colors)

// colors.unshift("chocolate");
// console.log(colors)

// colors.reverse();
// console.log(colors);

// console.log(colors.join(", "));    
// console.log(colors.join("_"));    
// console.log(colors.join(" and "));    

// // Arithmetic Operations
// let value1 = 20;
// let value2 = 5;

// console.log(value1 + value2); // addition
// console.log(value1 - value2); // subtraction
// console.log(value1 * value2); // multiplication
// console.log(value1 / value2); // division
// console.log(value1 % value2); // modulus
// console.log(23 % 4)

// // String Concatenation
// const firstName = "Amara"
// const lastName = "Goodluck"

// console.log(firstName + " " + lastName);

// // Template Literals
// let numberOfStudents = 45
// console.log(`I have ${numberOfStudents} students in the class`)

// let thirdName = "Sunshine"
// let fourthName = "Kehinde"
// console.log(`My third name is ${thirdName} and my fourth name is ${fourthName}`)

// // Assignment Operators
// let age = 25;

// age += 20; // age = age + 20
// console.log(age) // 45

// age /= 20; // age = age / 20
// console.log(age) // 2.25


// // Comparison Operations
// let val1 = 20;
// let val2 = 30;
// let val3 = "20"

// console.log(val1 == val2) // == will only check for value
// console.log(val1 == val3)
// console.log(val1 === val3) // === will check for values and data types

// console.log("=================================")
// console.log(val1 != val2)
// console.log(val1 != val3)
// console.log(val1 !== val2)
// console.log(val1 !== val3)

// console.log("=================================")
// console.log(val1 > val2)
// console.log(val2 < val3)
// console.log(val1 >= val2)
// console.log(val1 >= val3)

// Logical Operators
// Logical AND (&&)
// false && false = false
// false && true = false
// true && true = true
// true && false = false

// let num1 = 5;
// let num2 = 3;
// let num3 = 8;

// let result = num2 < num1 && num1 > num3;

// console.log(result + " for logical AND")


// Logical OR (||)
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// let res = num2 > 5 || num1 === 1 || num3 > 5
// console.log(res)

// Logical NOT (!)

// console.log(true)
// console.log(!true)
//  let response = 20 > 45;
//  console.log(!response)


// // =============JS Functions================
// function displayClass() {
//     console.log("This is frontend development live class");
// }

// displayClass();

// // const firstname = "Amara";
// // const lastname = "Blessing";
// let age = 30;

// function displayNames(firstName, lastName) {
//     console.log(`My first name is ${firstName}, my last name is ${lastName} and my age is ${age}`);
// }

// displayNames("Samuel", "Bunmi");
// displayNames("Amara", "Blessing");
// displayNames("George", "Jude")


// function multiplyValues(a, b, c, d){
//     return a * b * c * d;
//     console.log(a*b*c*d)
// }

// let result = multiplyValues(2, 4, 5, 10);
// console.log(result);
// console.log(multiplyValues(2,4,5,2));


// function frontend() {
//     console.log("This is a JS class");
//     console.log("This is Axia Africa");
//     return 2+2;
//     console.log("This is cohort 10");
//     console.log("something")
// }

// console.log("THis should work")

// frontend();
// console.log(frontend());


// // Function Expression, Anonymous FUnction

// let sayHello = function() {
//     console.log("Hiiii");
// }

// let greetUser = function(name) {
//     console.log(`Hi ${name}, welcome to this class!`);
// }

// sayHello();
// greetUser("Dee man")



// // Arrow function
// const axia = () => {
//     console.log("Axia Africa!!!")
// }

// const addNumbers = (a, b) => {
//     console.log(a + b)
// }

// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// axia();
// addNumbers(10, 30)


// ======== Conditionals =======
// syntax
// if(condition) {
//     block of codes
// }

// let age = 50;

// if(age > 50) {
//     console.log("You are old");
// } else if(age > 40){
//     console.log("You are partially old");
// } else if(age > 30) {
//     console.log("You are kinda old");
// } else if(age > 20) {
//     console.log("You are a youth");
// } else {
//     console.log("You are young")
// }


// let height = 200;
// let isRegistered = false;

// if(height >= 150 && isRegistered){
//     console.log("You are qualified for the competition");
// } else {
//     console.log("You should probably eat more beans");
// }

// let isPreviousWinner = true;
// let numberOfPlayers = 10;

// if(isPreviousWinner || numberOfPlayers > 15){
//     console.log("You are freee to register your players");
// } else {
//     console.log("Go play in the championship!!!");
// }


// Nested If
// let score = 60;
// let points = 80;
// let name = "Muiz"

// if(points > 60){
//     console.log("You are fit");
//     if(score > 50){
//         console.log("You passed");
//         if(name === "Muiz"){
//             console.log("This is Muiz")
//         }
//     }else {
//         console.log("You failed");
//     }
// }else {
//     console.log("You are not fit")
// }

// if(points > 60 && score > 50 && name === "Muiz"){

// }


// Loops
// For Loop

// for(initialization; condition; increment){}

// for(let i = 0; i < 10; i++){
//     if(i === 3) { continue; }

//     if(i === 7){
//         break;
//     }

//     console.log(`This is the number ${i}`);
// }

// let num = 20;
// ++num //21 21
// num++ //20 //21


// while loop

// let count = 0;
// while(count < 10) {
//     console.log("My count is " + count);
//     count++;
// }


// do while
// let num = 10;

// do {
//     console.log(num);
//     num++;
// } while (num < 8);

// let num1 = 0
// do {
//     console.log(num1);
//     ++num1;
// } while (num1 < 8);